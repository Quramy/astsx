import ts from 'typescript';

namespace Astsx {

  export type Kinds = never;

  export function $(kind: Kinds, props: any): ts.Node {
    switch (kind) {
      default:
        throw new Error("Unknown kind");
    }
  }
}

declare global {
  namespace JSX {
    export interface IntrinsicElements {
    }
  }
}

export = Astsx;
