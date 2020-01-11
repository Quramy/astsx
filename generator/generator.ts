import { caseClause } from "./case-clause";
import path from "path";
import ts from "typescript";
import { createPropType } from "./prop-type";
import { overloadFuncSig } from "./overload-func-sig";
import { funcBody } from "./func-body";
import { wrapWithTs } from "./util";

function isSubtypeFromTsNode(type: ts.Type): boolean {
  if (type.symbol && type.symbol.escapedName === 'Node') return true;
  const baseTypes = type.getBaseTypes();
  if (!baseTypes) return false;
  return baseTypes.some(bt => isSubtypeFromTsNode(bt));
}

type FunctionOverloads = {
  functionName: string;
  nodeNamePascal: string;
  nodeNameCamel: string;
  declarations: ts.FunctionDeclaration[];
};

const blackList = [
  'createSourceFile',
  'createInputFiles',
  'createUnparsedSourceFile',
  'createLanguageServiceSourceFile',
];


function main() {

  const program = ts.createProgram({
    rootNames: [
      ts.getDefaultLibFilePath(ts.getDefaultCompilerOptions()).replace(/lib\.d\.ts/, "typescript.d.ts"),
    ],
    options: ts.getDefaultCompilerOptions(),
  });


  const tsdtsFileName = program.getRootFileNames()[0];
  const tsdtsSrc = program.getSourceFile(tsdtsFileName);
  const templateSrc = ts.createSourceFile('astsx.ts', ts.sys.readFile(path.resolve(__dirname, "./template.ts"))!, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS);

  const typeChecker = program.getTypeChecker();

  const funcDefsList: FunctionOverloads[] = [];
  let preFunctionOverload: FunctionOverloads | undefined = undefined;

  const findCreateNodeFunctionVisitor = (node: ts.Node) => {
    if (!ts.isFunctionDeclaration(node)) {
      ts.forEachChild(node, findCreateNodeFunctionVisitor);
      return;
    }
    if (!node.name || !node.name.text.startsWith('create')) {
      return;
    }
    if (blackList.indexOf(node.name.text) !== -1) return;
    if (!node.type) return;
    const type = typeChecker.getTypeFromTypeNode(node.type);
    if (!isSubtypeFromTsNode(type)) return;

    const nodeNamePascal = node.name.text.slice('create'.length);
    const nodeNameCamel = nodeNamePascal[0].toLowerCase() + nodeNamePascal.slice(1);

    if (!preFunctionOverload || preFunctionOverload.functionName !== node.name.text) {
      const functionOverloads = {
        functionName: node.name.text,
        nodeNameCamel,
        nodeNamePascal,
        declarations: [node],
      };
      funcDefsList.push(functionOverloads);
      preFunctionOverload = functionOverloads;
    } else {
      preFunctionOverload.declarations.push(node);
    }
  };
  ts.forEachChild(tsdtsSrc!, findCreateNodeFunctionVisitor);

  const propTypeDeclarations: ts.TypeAliasDeclaration[] = [];
  const kindLeterals: ts.LiteralTypeNode[] = [];
  const funcBodys: ts.FunctionDeclaration[] = [];
  const funcSig: ts.FunctionDeclaration[] = [];
  const caseClauses: ts.CaseClause[] = [];
  const intrinsicElementsPropertySignatures: ts.PropertySignature[] = [];

  for (const functionOverloads of funcDefsList) {
    if (functionOverloads.declarations.length > 1) continue; // TODO

    propTypeDeclarations.push(createPropType(typeChecker, functionOverloads.declarations[0], functionOverloads.nodeNamePascal, -1));
    kindLeterals.push(
      ts.createLiteralTypeNode(
        ts.createStringLiteral(functionOverloads.nodeNameCamel),
      ),
    );
    funcSig.push(overloadFuncSig(functionOverloads.declarations[0], functionOverloads.nodeNamePascal, functionOverloads.nodeNameCamel));
    funcBodys.push(funcBody(functionOverloads.declarations[0], functionOverloads.functionName, functionOverloads.nodeNamePascal));
    caseClauses.push(caseClause(functionOverloads.declarations[0], functionOverloads.nodeNameCamel, functionOverloads.nodeNamePascal));
    intrinsicElementsPropertySignatures.push(
      ts.createPropertySignature(
        undefined,
        functionOverloads.nodeNameCamel,
        undefined,
        ts.createTypeReferenceNode(
          ts.createQualifiedName(
            ts.createIdentifier('Astsx'),
            `${functionOverloads.nodeNamePascal}Props`,
          ),
          undefined,
        ),
        undefined,
      ),
    );
  }

  const funcCreateTransformer = (ctx: ts.TransformationContext) => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isTypeAliasDeclaration(node) && node.name.text === 'Kinds') {
        return ts.updateTypeAliasDeclaration(
          node,
          node.decorators,
          node.modifiers,
          node.name,
          node.typeParameters,
          ts.createUnionTypeNode(
            kindLeterals,
          ),
        );
      }
      if (ts.isCaseBlock(node)) {
        return ts.updateCaseBlock(node, [...caseClauses, ...node.clauses]);
      }
      if (ts.isModuleBlock(node) && ts.isIdentifier(node.parent.name) && node.parent.name.text === 'Astsx') {
        const moduleBlock = ts.visitEachChild(node, visit, ctx);
        const middle = moduleBlock.statements.slice(0, moduleBlock.statements.length - 1);
        const last = moduleBlock.statements[moduleBlock.statements.length - 1];
        return ts.updateModuleBlock(
          moduleBlock,
          [...propTypeDeclarations, ...middle, ...funcBodys, ...funcSig, last],
        );
      }
      if (ts.isInterfaceDeclaration(node) && node.name.text  === 'IntrinsicElements') {
        return ts.updateInterfaceDeclaration(
          node,
          node.decorators,
          node.modifiers,
          node.name,
          node.typeParameters,
          node.heritageClauses,
          intrinsicElementsPropertySignatures,
        );
      }
      return ts.visitEachChild(node, visit, ctx);
    };
    return (src: ts.SourceFile) => ts.visitNode(src, visit);
  };

  const addTsNamespaceTransformer = (ctx: ts.TransformationContext) => {
    let inAstsx = false;
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isModuleDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === 'Astsx') {
        inAstsx = true;
        const ret = ts.visitEachChild(node, visit, ctx);
        inAstsx = false;
        return ret;
      }
      if (inAstsx  && ts.isTypeReferenceNode(node)) {
        if (ts.isIdentifier(node.typeName) && !node.typeName.text.endsWith('Props') && node.typeName.text !== 'Kinds') {
          return wrapWithTs(ts.visitEachChild(node, visit, ctx));
        }
      }
      return ts.visitEachChild(node, visit, ctx);
    };
    return (src: ts.SourceFile) => ts.visitNode(src, visit);
  };

  const { transformed } = ts.transform(templateSrc, [funcCreateTransformer, addTsNamespaceTransformer]);


  const printer = ts.createPrinter();
  const generatedText = printer.printFile(transformed[0]);
  console.log(generatedText);
}
main();
