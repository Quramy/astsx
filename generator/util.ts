import ts from 'typescript';

export function wrapWithTs(typeRef: ts.TypeNode): ts.TypeNode {
  if (!ts.isTypeReferenceNode(typeRef) || !ts.isIdentifier(typeRef.typeName)) return typeRef;
  return ts.createTypeReferenceNode(ts.createQualifiedName(
    ts.createIdentifier('ts'),
    typeRef.typeName,
  ), undefined);
}
