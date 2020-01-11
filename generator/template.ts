import ts from "typescript";

namespace Astsx {

  export type Kinds = never;

  export function $(kind: any, props: any): ts.Node {
    if (typeof kind === "function") return kind(props);
    switch (kind) {
      default:
        throw new Error("Unknown kind");
    }
  }
}

declare global {
  namespace JSX {

    // We can't use JSX.Element because if the JSX expression is infered as ts.Node, we can't assgin it to attribute which is subtype of ts.Node.
    // see https://github.com/microsoft/TypeScript/pull/29818, https://github.com/microsoft/TypeScript/issues/21699
    // export interface Element extends ts.Node { }
    
    export interface IntrinsicElements {
    }
  }
}

export = Astsx;
