import ts from 'typescript';

export function overloadFuncSig(dec: ts.FunctionDeclaration, nodeNamePascal: string, nodeNameCamel: string) {
  return ts.createFunctionDeclaration(
    undefined,
    ts.createModifiersFromModifierFlags(ts.ModifierFlags.Export),
    undefined,
    '$',
    undefined,
    [
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        'kind',
        undefined,
        ts.createLiteralTypeNode(ts.createStringLiteral(nodeNameCamel)),
        undefined,
      ),
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        'props',
        undefined,
        ts.createTypeReferenceNode(`${nodeNamePascal}Props`, undefined),
        undefined,
      ),
    ],
    dec.type,
    undefined,
  );
}
