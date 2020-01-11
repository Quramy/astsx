import ts from 'typescript';
import { wrapWithTs } from "./util";

export function createPropType(checker: ts.TypeChecker, dec: ts.FunctionDeclaration, nodeNamePascal: string, index = -1) {
  const suffix = index === -1 ? '' : `_${index}`;
  return ts.createTypeAliasDeclaration(
    undefined,
    ts.createModifiersFromModifierFlags(ts.ModifierFlags.Export),
    `${nodeNamePascal}Props${suffix}`,
    undefined,
    ts.createTypeLiteralNode(
      dec.parameters.map(parameter => {
        const ptype = parameter.type!;
        const pptype = ts.isUnionTypeNode(ptype) ? ts.createUnionTypeNode(ptype.types.map(wrapWithTs)) : wrapWithTs(ptype);
        const allowedUndefined = ts.isUnionTypeNode(ptype) && ptype.types.some(t => ts.isToken(ts.createToken(ts.SyntaxKind.UndefinedKeyword)));
        return ts.createPropertySignature(
          parameter.modifiers,
          (parameter.name as ts.Identifier).text,
          allowedUndefined ? ts.createToken(ts.SyntaxKind.QuestionToken) : undefined,
          pptype,
          undefined,
        );
      }),
    ),
  );
}
