# astsx

Write TypeScript AST with TSX

```ts
import ts from 'typescript';
import Astsx from 'astsx';

const Id = () => <identifier text="hoge" />;

const Func = () => (
  <functionDeclaration
    name="foo"
    parameters={[]}
    body={
      <block
        statements={[
          <return expression={<Id />} />
        ]}
        multiLine
      />
    }
  />
);

const printer = ts.createPrinter();
const src = ts.createSourceFile('main.ts', '', ts.ScriptTarget.Latest);

console.log(printer.printNode(ts.EmitHint.Unspecified, Func(), src));
```

## Getting started

```sh
$ npm i tsastx -D
```

```json
/* tsconfig.json */
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "Astsx.$"
  }
}
```
