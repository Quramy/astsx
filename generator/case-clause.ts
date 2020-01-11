import ts from 'typescript';

export function caseClause(funcDef: ts.FunctionDeclaration, nodeNameCamel: string, nodeNamePascal: string) {
  return ts.createCaseClause(
    ts.createStringLiteral(nodeNameCamel),
    [
      ts.createReturn(
        ts.createCall(
          ts.createIdentifier(`AstsxCreate${nodeNamePascal}`),
          undefined,
          [
            ts.createIdentifier('props'),
          ],
        ),
      ),
    ],
  );
}
