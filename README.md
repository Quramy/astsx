# astsx

Write TypeScript AST with TSX

```jsx
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
$ npm i astsx -D
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

## Disclaimer

For now, return type of TSX expression is inferred to not subtype of `ts.Node` but `any` type. It's TypeScript `JSX.Element` type inference mechanism issue. See https://github.com/microsoft/TypeScript/issues/21699, if you want detail.
