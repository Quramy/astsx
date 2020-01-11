import ts from 'typescript';

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
        const paramName = (parameter.name as ts.Identifier);
        const allowedUndefined = ts.isUnionTypeNode(ptype) && ptype.types.some(t => t.getText() === 'undefined');
        return ts.createPropertySignature(
          parameter.modifiers,
          paramName.text,
          allowedUndefined ? ts.createToken(ts.SyntaxKind.QuestionToken) : undefined,
          ptype,
          undefined,
        );
      }),
    ),
  );
}
