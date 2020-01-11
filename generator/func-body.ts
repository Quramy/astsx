import ts from 'typescript';

export function funcBody(funcDef: ts.FunctionDeclaration, functionName: string, nodeNamePascal: string) {
  return ts.createFunctionDeclaration(
    undefined,
    undefined,
    undefined,
    `AstsxCreate${nodeNamePascal}`,
    undefined,
    [
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        'props',
        undefined,
        ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
        undefined,
      ),
    ],
    undefined,
    ts.createBlock(
      [
        ts.createReturn(
          ts.createCall(
            ts.createPropertyAccess(
              ts.createIdentifier('ts'),
              ts.createIdentifier(functionName),
            ),
            undefined,
            funcDef.parameters.map(parameter => {
              return ts.createPropertyAccess(
                ts.createIdentifier('props'),
                (parameter.name as ts.Identifier).text,
              );
            }),
          ),
        ),
      ],
      true,
    ),
  );
}
