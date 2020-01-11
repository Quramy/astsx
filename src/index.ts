import ts from "typescript";
namespace Astsx {
    export type NodeProps = {
        kind: ts.SyntaxKind;
        pos: number;
        end: number;
    };
    export type NumericLiteralProps = {
        value: string;
        numericLiteralFlags: ts.TokenFlags;
    };
    export type BigIntLiteralProps = {
        value: string;
    };
    export type StringLiteralProps = {
        text: string;
    };
    export type RegularExpressionLiteralProps = {
        text: string;
    };
    export type IdentifierProps = {
        text: string;
    };
    export type TempVariableProps = {
        recordTempVariable?: ((node: ts.Identifier) => void) | undefined;
    };
    export type LoopVariableProps = {};
    export type UniqueNameProps = {
        text: string;
    };
    export type OptimisticUniqueNameProps = {
        text: string;
    };
    export type FileLevelUniqueNameProps = {
        text: string;
    };
    export type SuperProps = {};
    export type QualifiedNameProps = {
        left: ts.EntityName;
        right: string | ts.Identifier;
    };
    export type ComputedPropertyNameProps = {
        expression: ts.Expression;
    };
    export type TypeParameterDeclarationProps = {
        name: string | ts.Identifier;
        constraint: ts.TypeNode;
        defaultType: ts.TypeNode;
    };
    export type ParameterProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        dotDotDotToken?: ts.DotDotDotToken | undefined;
        name: string | ts.BindingName;
        questionToken: ts.QuestionToken;
        type: ts.TypeNode;
        initializer: ts.Expression;
    };
    export type DecoratorProps = {
        expression: ts.Expression;
    };
    export type PropertySignatureProps = {
        modifiers?: readonly ts.Modifier[] | undefined;
        name: ts.PropertyName | string;
        questionToken?: ts.QuestionToken | undefined;
        type?: ts.TypeNode | undefined;
        initializer?: ts.Expression | undefined;
    };
    export type PropertyProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.PropertyName;
        questionOrExclamationToken?: ts.QuestionToken | ts.ExclamationToken | undefined;
        type?: ts.TypeNode | undefined;
        initializer?: ts.Expression | undefined;
    };
    export type MethodSignatureProps = {
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
        name: string | ts.PropertyName;
        questionToken?: ts.QuestionToken | undefined;
    };
    export type MethodProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        asteriskToken?: ts.AsteriskToken | undefined;
        name: string | ts.PropertyName;
        questionToken?: ts.QuestionToken | undefined;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
        body?: ts.Block | undefined;
    };
    export type ConstructorProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        body?: ts.Block | undefined;
    };
    export type GetAccessorProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.PropertyName;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
        body?: ts.Block | undefined;
    };
    export type SetAccessorProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.PropertyName;
        parameters: readonly ts.ParameterDeclaration[];
        body?: ts.Block | undefined;
    };
    export type CallSignatureProps = {
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
    };
    export type ConstructSignatureProps = {
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
    };
    export type IndexSignatureProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type: ts.TypeNode;
    };
    export type KeywordTypeNodeProps = {
        kind: ts.KeywordTypeNode[];
    };
    export type TypePredicateNodeProps = {
        parameterName: ts.Identifier | ts.ThisTypeNode | string;
        type: ts.TypeNode;
    };
    export type TypePredicateNodeWithModifierProps = {
        assertsModifier?: ts.AssertsToken | undefined;
        parameterName: ts.Identifier | ts.ThisTypeNode | string;
        type?: ts.TypeNode | undefined;
    };
    export type TypeReferenceNodeProps = {
        typeName: string | ts.EntityName;
        typeArguments?: readonly ts.TypeNode[] | undefined;
    };
    export type FunctionTypeNodeProps = {
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
    };
    export type ConstructorTypeNodeProps = {
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
    };
    export type TypeQueryNodeProps = {
        exprName: ts.EntityName;
    };
    export type TypeLiteralNodeProps = {
        members?: readonly ts.TypeElement[] | undefined;
    };
    export type ArrayTypeNodeProps = {
        elementType: ts.TypeNode;
    };
    export type TupleTypeNodeProps = {
        elementTypes: readonly ts.TypeNode[];
    };
    export type OptionalTypeNodeProps = {
        type: ts.TypeNode;
    };
    export type RestTypeNodeProps = {
        type: ts.TypeNode;
    };
    export type UnionTypeNodeProps = {
        types: readonly ts.TypeNode[];
    };
    export type IntersectionTypeNodeProps = {
        types: readonly ts.TypeNode[];
    };
    export type ConditionalTypeNodeProps = {
        checkType: ts.TypeNode;
        extendsType: ts.TypeNode;
        trueType: ts.TypeNode;
        falseType: ts.TypeNode;
    };
    export type InferTypeNodeProps = {
        typeParameter: ts.TypeParameterDeclaration;
    };
    export type ImportTypeNodeProps = {
        argument: ts.TypeNode;
        qualifier: ts.EntityName;
        typeArguments: readonly ts.TypeNode[];
        isTypeOf: boolean;
    };
    export type ParenthesizedTypeProps = {
        type: ts.TypeNode;
    };
    export type ThisTypeNodeProps = {};
    export type IndexedAccessTypeNodeProps = {
        objectType: ts.TypeNode;
        indexType: ts.TypeNode;
    };
    export type MappedTypeNodeProps = {
        readonlyToken?: ts.ReadonlyToken | ts.PlusToken | ts.MinusToken | undefined;
        typeParameter: ts.TypeParameterDeclaration;
        questionToken?: ts.QuestionToken | ts.PlusToken | ts.MinusToken | undefined;
        type?: ts.TypeNode | undefined;
    };
    export type LiteralTypeNodeProps = {
        literal: ts.LiteralTypeNode[];
    };
    export type ObjectBindingPatternProps = {
        elements: readonly ts.BindingElement[];
    };
    export type ArrayBindingPatternProps = {
        elements: readonly ts.ArrayBindingElement[];
    };
    export type BindingElementProps = {
        dotDotDotToken?: ts.DotDotDotToken | undefined;
        propertyName?: string | ts.PropertyName | undefined;
        name: string | ts.BindingName;
        initializer: ts.Expression;
    };
    export type ArrayLiteralProps = {
        elements: readonly ts.Expression[];
        multiLine: boolean;
    };
    export type PropertyAccessProps = {
        expression: ts.Expression;
        name: string | ts.Identifier;
    };
    export type PropertyAccessChainProps = {
        expression: ts.Expression;
        questionDotToken?: ts.QuestionDotToken | undefined;
        name: string | ts.Identifier;
    };
    export type ElementAccessProps = {
        expression: ts.Expression;
        index: number | ts.Expression;
    };
    export type ElementAccessChainProps = {
        expression: ts.Expression;
        questionDotToken?: ts.QuestionDotToken | undefined;
        index: number | ts.Expression;
    };
    export type CallProps = {
        expression: ts.Expression;
        typeArguments?: readonly ts.TypeNode[] | undefined;
        argumentsArray?: readonly ts.Expression[] | undefined;
    };
    export type CallChainProps = {
        expression: ts.Expression;
        questionDotToken?: ts.QuestionDotToken | undefined;
        typeArguments?: readonly ts.TypeNode[] | undefined;
        argumentsArray?: readonly ts.Expression[] | undefined;
    };
    export type NewProps = {
        expression: ts.Expression;
        typeArguments?: readonly ts.TypeNode[] | undefined;
        argumentsArray?: readonly ts.Expression[] | undefined;
    };
    export type TypeAssertionProps = {
        type: ts.TypeNode;
        expression: ts.Expression;
    };
    export type ParenProps = {
        expression: ts.Expression;
    };
    export type FunctionExpressionProps = {
        modifiers?: readonly ts.Modifier[] | undefined;
        asteriskToken?: ts.AsteriskToken | undefined;
        name?: string | ts.Identifier | undefined;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters?: readonly ts.ParameterDeclaration[] | undefined;
        type?: ts.TypeNode | undefined;
        body: ts.Block;
    };
    export type ArrowFunctionProps = {
        modifiers?: readonly ts.Modifier[] | undefined;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
        equalsGreaterThanToken?: ts.EqualsGreaterThanToken | undefined;
        body: ts.ConciseBody;
    };
    export type DeleteProps = {
        expression: ts.Expression;
    };
    export type TypeOfProps = {
        expression: ts.Expression;
    };
    export type VoidProps = {
        expression: ts.Expression;
    };
    export type AwaitProps = {
        expression: ts.Expression;
    };
    export type PrefixProps = {
        operator: ts.PrefixUnaryOperator;
        operand: ts.Expression;
    };
    export type PostfixProps = {
        operand: ts.Expression;
        operator: ts.PostfixUnaryOperator;
    };
    export type BinaryProps = {
        left: ts.Expression;
        operator: ts.BinaryOperator | ts.BinaryOperatorToken;
        right: ts.Expression;
    };
    export type TemplateExpressionProps = {
        head: ts.TemplateHead;
        templateSpans: readonly ts.TemplateSpan[];
    };
    export type TemplateHeadProps = {
        text: string;
        rawText: string;
    };
    export type TemplateMiddleProps = {
        text: string;
        rawText: string;
    };
    export type TemplateTailProps = {
        text: string;
        rawText: string;
    };
    export type NoSubstitutionTemplateLiteralProps = {
        text: string;
        rawText: string;
    };
    export type SpreadProps = {
        expression: ts.Expression;
    };
    export type ClassExpressionProps = {
        modifiers?: readonly ts.Modifier[] | undefined;
        name?: string | ts.Identifier | undefined;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        heritageClauses?: readonly ts.HeritageClause[] | undefined;
        members: readonly ts.ClassElement[];
    };
    export type OmittedExpressionProps = {};
    export type ExpressionWithTypeArgumentsProps = {
        typeArguments?: readonly ts.TypeNode[] | undefined;
        expression: ts.Expression;
    };
    export type AsExpressionProps = {
        expression: ts.Expression;
        type: ts.TypeNode;
    };
    export type NonNullExpressionProps = {
        expression: ts.Expression;
    };
    export type MetaPropertyProps = {
        keywordToken: ts.MetaProperty[];
        name: ts.Identifier;
    };
    export type TemplateSpanProps = {
        expression: ts.Expression;
        literal: ts.TemplateMiddle | ts.TemplateTail;
    };
    export type SemicolonClassElementProps = {};
    export type BlockProps = {
        statements: readonly ts.Statement[];
        multiLine: boolean;
    };
    export type VariableStatementProps = {
        modifiers?: readonly ts.Modifier[] | undefined;
        declarationList: ts.VariableDeclarationList | readonly ts.VariableDeclaration[];
    };
    export type EmptyStatementProps = {};
    export type ExpressionStatementProps = {
        expression: ts.Expression;
    };
    export type IfProps = {
        expression: ts.Expression;
        thenStatement: ts.Statement;
        elseStatement: ts.Statement;
    };
    export type DoProps = {
        statement: ts.Statement;
        expression: ts.Expression;
    };
    export type WhileProps = {
        expression: ts.Expression;
        statement: ts.Statement;
    };
    export type ForProps = {
        initializer?: ts.ForInitializer | undefined;
        condition?: ts.Expression | undefined;
        incrementor?: ts.Expression | undefined;
        statement: ts.Statement;
    };
    export type ForInProps = {
        initializer: ts.ForInitializer;
        expression: ts.Expression;
        statement: ts.Statement;
    };
    export type ForOfProps = {
        awaitModifier?: ts.AwaitKeywordToken | undefined;
        initializer: ts.ForInitializer;
        expression: ts.Expression;
        statement: ts.Statement;
    };
    export type ContinueProps = {
        label: string | ts.Identifier;
    };
    export type BreakProps = {
        label: string | ts.Identifier;
    };
    export type ReturnProps = {
        expression: ts.Expression;
    };
    export type WithProps = {
        expression: ts.Expression;
        statement: ts.Statement;
    };
    export type SwitchProps = {
        expression: ts.Expression;
        caseBlock: ts.CaseBlock;
    };
    export type LabelProps = {
        label: string | ts.Identifier;
        statement: ts.Statement;
    };
    export type ThrowProps = {
        expression: ts.Expression;
    };
    export type TryProps = {
        tryBlock: ts.Block;
        catchClause?: ts.CatchClause | undefined;
        finallyBlock?: ts.Block | undefined;
    };
    export type DebuggerStatementProps = {};
    export type VariableDeclarationProps = {
        name: string | ts.BindingName;
        type: ts.TypeNode;
        initializer: ts.Expression;
    };
    export type VariableDeclarationListProps = {
        declarations: readonly ts.VariableDeclaration[];
        flags: ts.NodeFlags;
    };
    export type FunctionDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        asteriskToken?: ts.AsteriskToken | undefined;
        name?: string | ts.Identifier | undefined;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        parameters: readonly ts.ParameterDeclaration[];
        type?: ts.TypeNode | undefined;
        body?: ts.Block | undefined;
    };
    export type ClassDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name?: string | ts.Identifier | undefined;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        heritageClauses?: readonly ts.HeritageClause[] | undefined;
        members: readonly ts.ClassElement[];
    };
    export type InterfaceDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.Identifier;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        heritageClauses?: readonly ts.HeritageClause[] | undefined;
        members: readonly ts.TypeElement[];
    };
    export type TypeAliasDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.Identifier;
        typeParameters?: readonly ts.TypeParameterDeclaration[] | undefined;
        type: ts.TypeNode;
    };
    export type EnumDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.Identifier;
        members: readonly ts.EnumMember[];
    };
    export type ModuleDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: ts.ModuleName;
        body?: ts.ModuleBody | undefined;
        flags: ts.NodeFlags;
    };
    export type ModuleBlockProps = {
        statements: readonly ts.Statement[];
    };
    export type CaseBlockProps = {
        clauses: readonly ts.CaseOrDefaultClause[];
    };
    export type NamespaceExportDeclarationProps = {
        name: string | ts.Identifier;
    };
    export type ImportEqualsDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        name: string | ts.Identifier;
        moduleReference: ts.ModuleReference;
    };
    export type ImportDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        importClause?: ts.ImportClause | undefined;
        moduleSpecifier: ts.Expression;
    };
    export type ImportClauseProps = {
        name?: ts.Identifier | undefined;
        namedBindings?: ts.NamedImportBindings | undefined;
    };
    export type NamespaceImportProps = {
        name: ts.Identifier;
    };
    export type NamedImportsProps = {
        elements: readonly ts.ImportSpecifier[];
    };
    export type ImportSpecifierProps = {
        propertyName?: ts.Identifier | undefined;
        name: ts.Identifier;
    };
    export type ExportAssignmentProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        isExportEquals?: boolean | undefined;
        expression: ts.Expression;
    };
    export type ExportDeclarationProps = {
        decorators?: readonly ts.Decorator[] | undefined;
        modifiers?: readonly ts.Modifier[] | undefined;
        exportClause?: ts.NamedExports | undefined;
        moduleSpecifier: ts.Expression;
    };
    export type NamedExportsProps = {
        elements: readonly ts.ExportSpecifier[];
    };
    export type ExportSpecifierProps = {
        propertyName?: string | ts.Identifier | undefined;
        name: string | ts.Identifier;
    };
    export type ExternalModuleReferenceProps = {
        expression: ts.Expression;
    };
    export type JsxElementProps = {
        openingElement: ts.JsxOpeningElement;
        children: readonly ts.JsxChild[];
        closingElement: ts.JsxClosingElement;
    };
    export type JsxSelfClosingElementProps = {
        tagName: ts.JsxTagNameExpression;
        typeArguments?: readonly ts.TypeNode[] | undefined;
        attributes: ts.JsxAttributes;
    };
    export type JsxOpeningElementProps = {
        tagName: ts.JsxTagNameExpression;
        typeArguments?: readonly ts.TypeNode[] | undefined;
        attributes: ts.JsxAttributes;
    };
    export type JsxClosingElementProps = {
        tagName: ts.JsxTagNameExpression;
    };
    export type JsxFragmentProps = {
        openingFragment: ts.JsxOpeningFragment;
        children: readonly ts.JsxChild[];
        closingFragment: ts.JsxClosingFragment;
    };
    export type JsxTextProps = {
        text: string;
        containsOnlyTriviaWhiteSpaces: boolean;
    };
    export type JsxOpeningFragmentProps = {};
    export type JsxJsxClosingFragmentProps = {};
    export type JsxAttributeProps = {
        name: ts.Identifier;
        initializer: ts.StringLiteral | ts.JsxExpression;
    };
    export type JsxSpreadAttributeProps = {
        expression: ts.Expression;
    };
    export type JsxExpressionProps = {
        dotDotDotToken?: ts.DotDotDotToken | undefined;
        expression?: ts.Expression | undefined;
    };
    export type CaseClauseProps = {
        expression: ts.Expression;
        statements: readonly ts.Statement[];
    };
    export type DefaultClauseProps = {
        statements: readonly ts.Statement[];
    };
    export type HeritageClauseProps = {
        token: ts.HeritageClause[];
        types: readonly ts.ExpressionWithTypeArguments[];
    };
    export type CatchClauseProps = {
        variableDeclaration?: string | ts.VariableDeclaration | undefined;
        block: ts.Block;
    };
    export type PropertyAssignmentProps = {
        name: string | ts.PropertyName;
        initializer: ts.Expression;
    };
    export type ShorthandPropertyAssignmentProps = {
        name: string | ts.Identifier;
        objectAssignmentInitializer: ts.Expression;
    };
    export type SpreadAssignmentProps = {
        expression: ts.Expression;
    };
    export type EnumMemberProps = {
        name: string | ts.PropertyName;
        initializer: ts.Expression;
    };
    export type NotEmittedStatementProps = {
        original: ts.Node;
    };
    export type PartiallyEmittedExpressionProps = {
        expression: ts.Expression;
        original: ts.Node;
    };
    export type CommaListProps = {
        elements: readonly ts.Expression[];
    };
    export type BundleProps = {
        sourceFiles: readonly ts.SourceFile[];
        prepends: readonly (ts.UnparsedSource | ts.InputFiles)[];
    };
    export type CommaProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type LessThanProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type AssignmentProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type StrictEqualityProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type StrictInequalityProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type AddProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type SubtractProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type PostfixIncrementProps = {
        operand: ts.Expression;
    };
    export type LogicalAndProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type LogicalOrProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type NullishCoalesceProps = {
        left: ts.Expression;
        right: ts.Expression;
    };
    export type LogicalNotProps = {
        operand: ts.Expression;
    };
    export type VoidZeroProps = {};
    export type ExportDefaultProps = {
        expression: ts.Expression;
    };
    export type ExternalModuleExportProps = {
        exportName: ts.Identifier;
    };
    export type Kinds = "node" | "numericLiteral" | "bigIntLiteral" | "stringLiteral" | "regularExpressionLiteral" | "identifier" | "tempVariable" | "loopVariable" | "uniqueName" | "optimisticUniqueName" | "fileLevelUniqueName" | "super" | "qualifiedName" | "computedPropertyName" | "typeParameterDeclaration" | "parameter" | "decorator" | "propertySignature" | "property" | "methodSignature" | "method" | "constructor" | "getAccessor" | "setAccessor" | "callSignature" | "constructSignature" | "indexSignature" | "keywordTypeNode" | "typePredicateNode" | "typePredicateNodeWithModifier" | "typeReferenceNode" | "functionTypeNode" | "constructorTypeNode" | "typeQueryNode" | "typeLiteralNode" | "arrayTypeNode" | "tupleTypeNode" | "optionalTypeNode" | "restTypeNode" | "unionTypeNode" | "intersectionTypeNode" | "conditionalTypeNode" | "inferTypeNode" | "importTypeNode" | "parenthesizedType" | "thisTypeNode" | "indexedAccessTypeNode" | "mappedTypeNode" | "literalTypeNode" | "objectBindingPattern" | "arrayBindingPattern" | "bindingElement" | "arrayLiteral" | "propertyAccess" | "propertyAccessChain" | "elementAccess" | "elementAccessChain" | "call" | "callChain" | "new" | "typeAssertion" | "paren" | "functionExpression" | "arrowFunction" | "delete" | "typeOf" | "void" | "await" | "prefix" | "postfix" | "binary" | "templateExpression" | "templateHead" | "templateMiddle" | "templateTail" | "noSubstitutionTemplateLiteral" | "spread" | "classExpression" | "omittedExpression" | "expressionWithTypeArguments" | "asExpression" | "nonNullExpression" | "metaProperty" | "templateSpan" | "semicolonClassElement" | "block" | "variableStatement" | "emptyStatement" | "expressionStatement" | "if" | "do" | "while" | "for" | "forIn" | "forOf" | "continue" | "break" | "return" | "with" | "switch" | "label" | "throw" | "try" | "debuggerStatement" | "variableDeclaration" | "variableDeclarationList" | "functionDeclaration" | "classDeclaration" | "interfaceDeclaration" | "typeAliasDeclaration" | "enumDeclaration" | "moduleDeclaration" | "moduleBlock" | "caseBlock" | "namespaceExportDeclaration" | "importEqualsDeclaration" | "importDeclaration" | "importClause" | "namespaceImport" | "namedImports" | "importSpecifier" | "exportAssignment" | "exportDeclaration" | "namedExports" | "exportSpecifier" | "externalModuleReference" | "jsxElement" | "jsxSelfClosingElement" | "jsxOpeningElement" | "jsxClosingElement" | "jsxFragment" | "jsxText" | "jsxOpeningFragment" | "jsxJsxClosingFragment" | "jsxAttribute" | "jsxSpreadAttribute" | "jsxExpression" | "caseClause" | "defaultClause" | "heritageClause" | "catchClause" | "propertyAssignment" | "shorthandPropertyAssignment" | "spreadAssignment" | "enumMember" | "notEmittedStatement" | "partiallyEmittedExpression" | "commaList" | "bundle" | "comma" | "lessThan" | "assignment" | "strictEquality" | "strictInequality" | "add" | "subtract" | "postfixIncrement" | "logicalAnd" | "logicalOr" | "nullishCoalesce" | "logicalNot" | "voidZero" | "exportDefault" | "externalModuleExport";
    function AstsxCreateNode(props: any) {
        return ts.createNode(props.kind, props.pos, props.end);
    }
    function AstsxCreateNumericLiteral(props: any) {
        return ts.createNumericLiteral(props.value, props.numericLiteralFlags);
    }
    function AstsxCreateBigIntLiteral(props: any) {
        return ts.createBigIntLiteral(props.value);
    }
    function AstsxCreateStringLiteral(props: any) {
        return ts.createStringLiteral(props.text);
    }
    function AstsxCreateRegularExpressionLiteral(props: any) {
        return ts.createRegularExpressionLiteral(props.text);
    }
    function AstsxCreateIdentifier(props: any) {
        return ts.createIdentifier(props.text);
    }
    function AstsxCreateTempVariable(props: any) {
        return ts.createTempVariable(props.recordTempVariable);
    }
    function AstsxCreateLoopVariable(props: any) {
        return ts.createLoopVariable();
    }
    function AstsxCreateUniqueName(props: any) {
        return ts.createUniqueName(props.text);
    }
    function AstsxCreateOptimisticUniqueName(props: any) {
        return ts.createOptimisticUniqueName(props.text);
    }
    function AstsxCreateFileLevelUniqueName(props: any) {
        return ts.createFileLevelUniqueName(props.text);
    }
    function AstsxCreateSuper(props: any) {
        return ts.createSuper();
    }
    function AstsxCreateQualifiedName(props: any) {
        return ts.createQualifiedName(props.left, props.right);
    }
    function AstsxCreateComputedPropertyName(props: any) {
        return ts.createComputedPropertyName(props.expression);
    }
    function AstsxCreateTypeParameterDeclaration(props: any) {
        return ts.createTypeParameterDeclaration(props.name, props.constraint, props.defaultType);
    }
    function AstsxCreateParameter(props: any) {
        return ts.createParameter(props.decorators, props.modifiers, props.dotDotDotToken, props.name, props.questionToken, props.type, props.initializer);
    }
    function AstsxCreateDecorator(props: any) {
        return ts.createDecorator(props.expression);
    }
    function AstsxCreatePropertySignature(props: any) {
        return ts.createPropertySignature(props.modifiers, props.name, props.questionToken, props.type, props.initializer);
    }
    function AstsxCreateProperty(props: any) {
        return ts.createProperty(props.decorators, props.modifiers, props.name, props.questionOrExclamationToken, props.type, props.initializer);
    }
    function AstsxCreateMethodSignature(props: any) {
        return ts.createMethodSignature(props.typeParameters, props.parameters, props.type, props.name, props.questionToken);
    }
    function AstsxCreateMethod(props: any) {
        return ts.createMethod(props.decorators, props.modifiers, props.asteriskToken, props.name, props.questionToken, props.typeParameters, props.parameters, props.type, props.body);
    }
    function AstsxCreateConstructor(props: any) {
        return ts.createConstructor(props.decorators, props.modifiers, props.parameters, props.body);
    }
    function AstsxCreateGetAccessor(props: any) {
        return ts.createGetAccessor(props.decorators, props.modifiers, props.name, props.parameters, props.type, props.body);
    }
    function AstsxCreateSetAccessor(props: any) {
        return ts.createSetAccessor(props.decorators, props.modifiers, props.name, props.parameters, props.body);
    }
    function AstsxCreateCallSignature(props: any) {
        return ts.createCallSignature(props.typeParameters, props.parameters, props.type);
    }
    function AstsxCreateConstructSignature(props: any) {
        return ts.createConstructSignature(props.typeParameters, props.parameters, props.type);
    }
    function AstsxCreateIndexSignature(props: any) {
        return ts.createIndexSignature(props.decorators, props.modifiers, props.parameters, props.type);
    }
    function AstsxCreateKeywordTypeNode(props: any) {
        return ts.createKeywordTypeNode(props.kind);
    }
    function AstsxCreateTypePredicateNode(props: any) {
        return ts.createTypePredicateNode(props.parameterName, props.type);
    }
    function AstsxCreateTypePredicateNodeWithModifier(props: any) {
        return ts.createTypePredicateNodeWithModifier(props.assertsModifier, props.parameterName, props.type);
    }
    function AstsxCreateTypeReferenceNode(props: any) {
        return ts.createTypeReferenceNode(props.typeName, props.typeArguments);
    }
    function AstsxCreateFunctionTypeNode(props: any) {
        return ts.createFunctionTypeNode(props.typeParameters, props.parameters, props.type);
    }
    function AstsxCreateConstructorTypeNode(props: any) {
        return ts.createConstructorTypeNode(props.typeParameters, props.parameters, props.type);
    }
    function AstsxCreateTypeQueryNode(props: any) {
        return ts.createTypeQueryNode(props.exprName);
    }
    function AstsxCreateTypeLiteralNode(props: any) {
        return ts.createTypeLiteralNode(props.members);
    }
    function AstsxCreateArrayTypeNode(props: any) {
        return ts.createArrayTypeNode(props.elementType);
    }
    function AstsxCreateTupleTypeNode(props: any) {
        return ts.createTupleTypeNode(props.elementTypes);
    }
    function AstsxCreateOptionalTypeNode(props: any) {
        return ts.createOptionalTypeNode(props.type);
    }
    function AstsxCreateRestTypeNode(props: any) {
        return ts.createRestTypeNode(props.type);
    }
    function AstsxCreateUnionTypeNode(props: any) {
        return ts.createUnionTypeNode(props.types);
    }
    function AstsxCreateIntersectionTypeNode(props: any) {
        return ts.createIntersectionTypeNode(props.types);
    }
    function AstsxCreateConditionalTypeNode(props: any) {
        return ts.createConditionalTypeNode(props.checkType, props.extendsType, props.trueType, props.falseType);
    }
    function AstsxCreateInferTypeNode(props: any) {
        return ts.createInferTypeNode(props.typeParameter);
    }
    function AstsxCreateImportTypeNode(props: any) {
        return ts.createImportTypeNode(props.argument, props.qualifier, props.typeArguments, props.isTypeOf);
    }
    function AstsxCreateParenthesizedType(props: any) {
        return ts.createParenthesizedType(props.type);
    }
    function AstsxCreateThisTypeNode(props: any) {
        return ts.createThisTypeNode();
    }
    function AstsxCreateIndexedAccessTypeNode(props: any) {
        return ts.createIndexedAccessTypeNode(props.objectType, props.indexType);
    }
    function AstsxCreateMappedTypeNode(props: any) {
        return ts.createMappedTypeNode(props.readonlyToken, props.typeParameter, props.questionToken, props.type);
    }
    function AstsxCreateLiteralTypeNode(props: any) {
        return ts.createLiteralTypeNode(props.literal);
    }
    function AstsxCreateObjectBindingPattern(props: any) {
        return ts.createObjectBindingPattern(props.elements);
    }
    function AstsxCreateArrayBindingPattern(props: any) {
        return ts.createArrayBindingPattern(props.elements);
    }
    function AstsxCreateBindingElement(props: any) {
        return ts.createBindingElement(props.dotDotDotToken, props.propertyName, props.name, props.initializer);
    }
    function AstsxCreateArrayLiteral(props: any) {
        return ts.createArrayLiteral(props.elements, props.multiLine);
    }
    function AstsxCreatePropertyAccess(props: any) {
        return ts.createPropertyAccess(props.expression, props.name);
    }
    function AstsxCreatePropertyAccessChain(props: any) {
        return ts.createPropertyAccessChain(props.expression, props.questionDotToken, props.name);
    }
    function AstsxCreateElementAccess(props: any) {
        return ts.createElementAccess(props.expression, props.index);
    }
    function AstsxCreateElementAccessChain(props: any) {
        return ts.createElementAccessChain(props.expression, props.questionDotToken, props.index);
    }
    function AstsxCreateCall(props: any) {
        return ts.createCall(props.expression, props.typeArguments, props.argumentsArray);
    }
    function AstsxCreateCallChain(props: any) {
        return ts.createCallChain(props.expression, props.questionDotToken, props.typeArguments, props.argumentsArray);
    }
    function AstsxCreateNew(props: any) {
        return ts.createNew(props.expression, props.typeArguments, props.argumentsArray);
    }
    function AstsxCreateTypeAssertion(props: any) {
        return ts.createTypeAssertion(props.type, props.expression);
    }
    function AstsxCreateParen(props: any) {
        return ts.createParen(props.expression);
    }
    function AstsxCreateFunctionExpression(props: any) {
        return ts.createFunctionExpression(props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body);
    }
    function AstsxCreateArrowFunction(props: any) {
        return ts.createArrowFunction(props.modifiers, props.typeParameters, props.parameters, props.type, props.equalsGreaterThanToken, props.body);
    }
    function AstsxCreateDelete(props: any) {
        return ts.createDelete(props.expression);
    }
    function AstsxCreateTypeOf(props: any) {
        return ts.createTypeOf(props.expression);
    }
    function AstsxCreateVoid(props: any) {
        return ts.createVoid(props.expression);
    }
    function AstsxCreateAwait(props: any) {
        return ts.createAwait(props.expression);
    }
    function AstsxCreatePrefix(props: any) {
        return ts.createPrefix(props.operator, props.operand);
    }
    function AstsxCreatePostfix(props: any) {
        return ts.createPostfix(props.operand, props.operator);
    }
    function AstsxCreateBinary(props: any) {
        return ts.createBinary(props.left, props.operator, props.right);
    }
    function AstsxCreateTemplateExpression(props: any) {
        return ts.createTemplateExpression(props.head, props.templateSpans);
    }
    function AstsxCreateTemplateHead(props: any) {
        return ts.createTemplateHead(props.text, props.rawText);
    }
    function AstsxCreateTemplateMiddle(props: any) {
        return ts.createTemplateMiddle(props.text, props.rawText);
    }
    function AstsxCreateTemplateTail(props: any) {
        return ts.createTemplateTail(props.text, props.rawText);
    }
    function AstsxCreateNoSubstitutionTemplateLiteral(props: any) {
        return ts.createNoSubstitutionTemplateLiteral(props.text, props.rawText);
    }
    function AstsxCreateSpread(props: any) {
        return ts.createSpread(props.expression);
    }
    function AstsxCreateClassExpression(props: any) {
        return ts.createClassExpression(props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
    }
    function AstsxCreateOmittedExpression(props: any) {
        return ts.createOmittedExpression();
    }
    function AstsxCreateExpressionWithTypeArguments(props: any) {
        return ts.createExpressionWithTypeArguments(props.typeArguments, props.expression);
    }
    function AstsxCreateAsExpression(props: any) {
        return ts.createAsExpression(props.expression, props.type);
    }
    function AstsxCreateNonNullExpression(props: any) {
        return ts.createNonNullExpression(props.expression);
    }
    function AstsxCreateMetaProperty(props: any) {
        return ts.createMetaProperty(props.keywordToken, props.name);
    }
    function AstsxCreateTemplateSpan(props: any) {
        return ts.createTemplateSpan(props.expression, props.literal);
    }
    function AstsxCreateSemicolonClassElement(props: any) {
        return ts.createSemicolonClassElement();
    }
    function AstsxCreateBlock(props: any) {
        return ts.createBlock(props.statements, props.multiLine);
    }
    function AstsxCreateVariableStatement(props: any) {
        return ts.createVariableStatement(props.modifiers, props.declarationList);
    }
    function AstsxCreateEmptyStatement(props: any) {
        return ts.createEmptyStatement();
    }
    function AstsxCreateExpressionStatement(props: any) {
        return ts.createExpressionStatement(props.expression);
    }
    function AstsxCreateIf(props: any) {
        return ts.createIf(props.expression, props.thenStatement, props.elseStatement);
    }
    function AstsxCreateDo(props: any) {
        return ts.createDo(props.statement, props.expression);
    }
    function AstsxCreateWhile(props: any) {
        return ts.createWhile(props.expression, props.statement);
    }
    function AstsxCreateFor(props: any) {
        return ts.createFor(props.initializer, props.condition, props.incrementor, props.statement);
    }
    function AstsxCreateForIn(props: any) {
        return ts.createForIn(props.initializer, props.expression, props.statement);
    }
    function AstsxCreateForOf(props: any) {
        return ts.createForOf(props.awaitModifier, props.initializer, props.expression, props.statement);
    }
    function AstsxCreateContinue(props: any) {
        return ts.createContinue(props.label);
    }
    function AstsxCreateBreak(props: any) {
        return ts.createBreak(props.label);
    }
    function AstsxCreateReturn(props: any) {
        return ts.createReturn(props.expression);
    }
    function AstsxCreateWith(props: any) {
        return ts.createWith(props.expression, props.statement);
    }
    function AstsxCreateSwitch(props: any) {
        return ts.createSwitch(props.expression, props.caseBlock);
    }
    function AstsxCreateLabel(props: any) {
        return ts.createLabel(props.label, props.statement);
    }
    function AstsxCreateThrow(props: any) {
        return ts.createThrow(props.expression);
    }
    function AstsxCreateTry(props: any) {
        return ts.createTry(props.tryBlock, props.catchClause, props.finallyBlock);
    }
    function AstsxCreateDebuggerStatement(props: any) {
        return ts.createDebuggerStatement();
    }
    function AstsxCreateVariableDeclaration(props: any) {
        return ts.createVariableDeclaration(props.name, props.type, props.initializer);
    }
    function AstsxCreateVariableDeclarationList(props: any) {
        return ts.createVariableDeclarationList(props.declarations, props.flags);
    }
    function AstsxCreateFunctionDeclaration(props: any) {
        return ts.createFunctionDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body);
    }
    function AstsxCreateClassDeclaration(props: any) {
        return ts.createClassDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
    }
    function AstsxCreateInterfaceDeclaration(props: any) {
        return ts.createInterfaceDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
    }
    function AstsxCreateTypeAliasDeclaration(props: any) {
        return ts.createTypeAliasDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.type);
    }
    function AstsxCreateEnumDeclaration(props: any) {
        return ts.createEnumDeclaration(props.decorators, props.modifiers, props.name, props.members);
    }
    function AstsxCreateModuleDeclaration(props: any) {
        return ts.createModuleDeclaration(props.decorators, props.modifiers, props.name, props.body, props.flags);
    }
    function AstsxCreateModuleBlock(props: any) {
        return ts.createModuleBlock(props.statements);
    }
    function AstsxCreateCaseBlock(props: any) {
        return ts.createCaseBlock(props.clauses);
    }
    function AstsxCreateNamespaceExportDeclaration(props: any) {
        return ts.createNamespaceExportDeclaration(props.name);
    }
    function AstsxCreateImportEqualsDeclaration(props: any) {
        return ts.createImportEqualsDeclaration(props.decorators, props.modifiers, props.name, props.moduleReference);
    }
    function AstsxCreateImportDeclaration(props: any) {
        return ts.createImportDeclaration(props.decorators, props.modifiers, props.importClause, props.moduleSpecifier);
    }
    function AstsxCreateImportClause(props: any) {
        return ts.createImportClause(props.name, props.namedBindings);
    }
    function AstsxCreateNamespaceImport(props: any) {
        return ts.createNamespaceImport(props.name);
    }
    function AstsxCreateNamedImports(props: any) {
        return ts.createNamedImports(props.elements);
    }
    function AstsxCreateImportSpecifier(props: any) {
        return ts.createImportSpecifier(props.propertyName, props.name);
    }
    function AstsxCreateExportAssignment(props: any) {
        return ts.createExportAssignment(props.decorators, props.modifiers, props.isExportEquals, props.expression);
    }
    function AstsxCreateExportDeclaration(props: any) {
        return ts.createExportDeclaration(props.decorators, props.modifiers, props.exportClause, props.moduleSpecifier);
    }
    function AstsxCreateNamedExports(props: any) {
        return ts.createNamedExports(props.elements);
    }
    function AstsxCreateExportSpecifier(props: any) {
        return ts.createExportSpecifier(props.propertyName, props.name);
    }
    function AstsxCreateExternalModuleReference(props: any) {
        return ts.createExternalModuleReference(props.expression);
    }
    function AstsxCreateJsxElement(props: any) {
        return ts.createJsxElement(props.openingElement, props.children, props.closingElement);
    }
    function AstsxCreateJsxSelfClosingElement(props: any) {
        return ts.createJsxSelfClosingElement(props.tagName, props.typeArguments, props.attributes);
    }
    function AstsxCreateJsxOpeningElement(props: any) {
        return ts.createJsxOpeningElement(props.tagName, props.typeArguments, props.attributes);
    }
    function AstsxCreateJsxClosingElement(props: any) {
        return ts.createJsxClosingElement(props.tagName);
    }
    function AstsxCreateJsxFragment(props: any) {
        return ts.createJsxFragment(props.openingFragment, props.children, props.closingFragment);
    }
    function AstsxCreateJsxText(props: any) {
        return ts.createJsxText(props.text, props.containsOnlyTriviaWhiteSpaces);
    }
    function AstsxCreateJsxOpeningFragment(props: any) {
        return ts.createJsxOpeningFragment();
    }
    function AstsxCreateJsxJsxClosingFragment(props: any) {
        return ts.createJsxJsxClosingFragment();
    }
    function AstsxCreateJsxAttribute(props: any) {
        return ts.createJsxAttribute(props.name, props.initializer);
    }
    function AstsxCreateJsxSpreadAttribute(props: any) {
        return ts.createJsxSpreadAttribute(props.expression);
    }
    function AstsxCreateJsxExpression(props: any) {
        return ts.createJsxExpression(props.dotDotDotToken, props.expression);
    }
    function AstsxCreateCaseClause(props: any) {
        return ts.createCaseClause(props.expression, props.statements);
    }
    function AstsxCreateDefaultClause(props: any) {
        return ts.createDefaultClause(props.statements);
    }
    function AstsxCreateHeritageClause(props: any) {
        return ts.createHeritageClause(props.token, props.types);
    }
    function AstsxCreateCatchClause(props: any) {
        return ts.createCatchClause(props.variableDeclaration, props.block);
    }
    function AstsxCreatePropertyAssignment(props: any) {
        return ts.createPropertyAssignment(props.name, props.initializer);
    }
    function AstsxCreateShorthandPropertyAssignment(props: any) {
        return ts.createShorthandPropertyAssignment(props.name, props.objectAssignmentInitializer);
    }
    function AstsxCreateSpreadAssignment(props: any) {
        return ts.createSpreadAssignment(props.expression);
    }
    function AstsxCreateEnumMember(props: any) {
        return ts.createEnumMember(props.name, props.initializer);
    }
    function AstsxCreateNotEmittedStatement(props: any) {
        return ts.createNotEmittedStatement(props.original);
    }
    function AstsxCreatePartiallyEmittedExpression(props: any) {
        return ts.createPartiallyEmittedExpression(props.expression, props.original);
    }
    function AstsxCreateCommaList(props: any) {
        return ts.createCommaList(props.elements);
    }
    function AstsxCreateBundle(props: any) {
        return ts.createBundle(props.sourceFiles, props.prepends);
    }
    function AstsxCreateComma(props: any) {
        return ts.createComma(props.left, props.right);
    }
    function AstsxCreateLessThan(props: any) {
        return ts.createLessThan(props.left, props.right);
    }
    function AstsxCreateAssignment(props: any) {
        return ts.createAssignment(props.left, props.right);
    }
    function AstsxCreateStrictEquality(props: any) {
        return ts.createStrictEquality(props.left, props.right);
    }
    function AstsxCreateStrictInequality(props: any) {
        return ts.createStrictInequality(props.left, props.right);
    }
    function AstsxCreateAdd(props: any) {
        return ts.createAdd(props.left, props.right);
    }
    function AstsxCreateSubtract(props: any) {
        return ts.createSubtract(props.left, props.right);
    }
    function AstsxCreatePostfixIncrement(props: any) {
        return ts.createPostfixIncrement(props.operand);
    }
    function AstsxCreateLogicalAnd(props: any) {
        return ts.createLogicalAnd(props.left, props.right);
    }
    function AstsxCreateLogicalOr(props: any) {
        return ts.createLogicalOr(props.left, props.right);
    }
    function AstsxCreateNullishCoalesce(props: any) {
        return ts.createNullishCoalesce(props.left, props.right);
    }
    function AstsxCreateLogicalNot(props: any) {
        return ts.createLogicalNot(props.operand);
    }
    function AstsxCreateVoidZero(props: any) {
        return ts.createVoidZero();
    }
    function AstsxCreateExportDefault(props: any) {
        return ts.createExportDefault(props.expression);
    }
    function AstsxCreateExternalModuleExport(props: any) {
        return ts.createExternalModuleExport(props.exportName);
    }
    export function $(kind: "node", props: NodeProps): ts.Node;
    export function $(kind: "numericLiteral", props: NumericLiteralProps): ts.NumericLiteral;
    export function $(kind: "bigIntLiteral", props: BigIntLiteralProps): ts.BigIntLiteral;
    export function $(kind: "stringLiteral", props: StringLiteralProps): ts.StringLiteral;
    export function $(kind: "regularExpressionLiteral", props: RegularExpressionLiteralProps): ts.RegularExpressionLiteral;
    export function $(kind: "identifier", props: IdentifierProps): ts.Identifier;
    export function $(kind: "tempVariable", props: TempVariableProps): ts.Identifier;
    export function $(kind: "loopVariable", props: LoopVariableProps): ts.Identifier;
    export function $(kind: "uniqueName", props: UniqueNameProps): ts.Identifier;
    export function $(kind: "optimisticUniqueName", props: OptimisticUniqueNameProps): ts.Identifier;
    export function $(kind: "fileLevelUniqueName", props: FileLevelUniqueNameProps): ts.Identifier;
    export function $(kind: "super", props: SuperProps): ts.SuperExpression;
    export function $(kind: "qualifiedName", props: QualifiedNameProps): ts.QualifiedName;
    export function $(kind: "computedPropertyName", props: ComputedPropertyNameProps): ts.ComputedPropertyName;
    export function $(kind: "typeParameterDeclaration", props: TypeParameterDeclarationProps): ts.TypeParameterDeclaration;
    export function $(kind: "parameter", props: ParameterProps): ts.ParameterDeclaration;
    export function $(kind: "decorator", props: DecoratorProps): ts.Decorator;
    export function $(kind: "propertySignature", props: PropertySignatureProps): ts.PropertySignature;
    export function $(kind: "property", props: PropertyProps): ts.PropertyDeclaration;
    export function $(kind: "methodSignature", props: MethodSignatureProps): ts.MethodSignature;
    export function $(kind: "method", props: MethodProps): ts.MethodDeclaration;
    export function $(kind: "constructor", props: ConstructorProps): ts.ConstructorDeclaration;
    export function $(kind: "getAccessor", props: GetAccessorProps): ts.GetAccessorDeclaration;
    export function $(kind: "setAccessor", props: SetAccessorProps): ts.SetAccessorDeclaration;
    export function $(kind: "callSignature", props: CallSignatureProps): ts.CallSignatureDeclaration;
    export function $(kind: "constructSignature", props: ConstructSignatureProps): ts.ConstructSignatureDeclaration;
    export function $(kind: "indexSignature", props: IndexSignatureProps): ts.IndexSignatureDeclaration;
    export function $(kind: "keywordTypeNode", props: KeywordTypeNodeProps): ts.KeywordTypeNode;
    export function $(kind: "typePredicateNode", props: TypePredicateNodeProps): ts.TypePredicateNode;
    export function $(kind: "typePredicateNodeWithModifier", props: TypePredicateNodeWithModifierProps): ts.TypePredicateNode;
    export function $(kind: "typeReferenceNode", props: TypeReferenceNodeProps): ts.TypeReferenceNode;
    export function $(kind: "functionTypeNode", props: FunctionTypeNodeProps): ts.FunctionTypeNode;
    export function $(kind: "constructorTypeNode", props: ConstructorTypeNodeProps): ts.ConstructorTypeNode;
    export function $(kind: "typeQueryNode", props: TypeQueryNodeProps): ts.TypeQueryNode;
    export function $(kind: "typeLiteralNode", props: TypeLiteralNodeProps): ts.TypeLiteralNode;
    export function $(kind: "arrayTypeNode", props: ArrayTypeNodeProps): ts.ArrayTypeNode;
    export function $(kind: "tupleTypeNode", props: TupleTypeNodeProps): ts.TupleTypeNode;
    export function $(kind: "optionalTypeNode", props: OptionalTypeNodeProps): ts.OptionalTypeNode;
    export function $(kind: "restTypeNode", props: RestTypeNodeProps): ts.RestTypeNode;
    export function $(kind: "unionTypeNode", props: UnionTypeNodeProps): ts.UnionTypeNode;
    export function $(kind: "intersectionTypeNode", props: IntersectionTypeNodeProps): ts.IntersectionTypeNode;
    export function $(kind: "conditionalTypeNode", props: ConditionalTypeNodeProps): ts.ConditionalTypeNode;
    export function $(kind: "inferTypeNode", props: InferTypeNodeProps): ts.InferTypeNode;
    export function $(kind: "importTypeNode", props: ImportTypeNodeProps): ts.ImportTypeNode;
    export function $(kind: "parenthesizedType", props: ParenthesizedTypeProps): ts.ParenthesizedTypeNode;
    export function $(kind: "thisTypeNode", props: ThisTypeNodeProps): ts.ThisTypeNode;
    export function $(kind: "indexedAccessTypeNode", props: IndexedAccessTypeNodeProps): ts.IndexedAccessTypeNode;
    export function $(kind: "mappedTypeNode", props: MappedTypeNodeProps): ts.MappedTypeNode;
    export function $(kind: "literalTypeNode", props: LiteralTypeNodeProps): ts.LiteralTypeNode;
    export function $(kind: "objectBindingPattern", props: ObjectBindingPatternProps): ts.ObjectBindingPattern;
    export function $(kind: "arrayBindingPattern", props: ArrayBindingPatternProps): ts.ArrayBindingPattern;
    export function $(kind: "bindingElement", props: BindingElementProps): ts.BindingElement;
    export function $(kind: "arrayLiteral", props: ArrayLiteralProps): ts.ArrayLiteralExpression;
    export function $(kind: "propertyAccess", props: PropertyAccessProps): ts.PropertyAccessExpression;
    export function $(kind: "propertyAccessChain", props: PropertyAccessChainProps): ts.PropertyAccessChain;
    export function $(kind: "elementAccess", props: ElementAccessProps): ts.ElementAccessExpression;
    export function $(kind: "elementAccessChain", props: ElementAccessChainProps): ts.ElementAccessChain;
    export function $(kind: "call", props: CallProps): ts.CallExpression;
    export function $(kind: "callChain", props: CallChainProps): ts.CallChain;
    export function $(kind: "new", props: NewProps): ts.NewExpression;
    export function $(kind: "typeAssertion", props: TypeAssertionProps): ts.TypeAssertion;
    export function $(kind: "paren", props: ParenProps): ts.ParenthesizedExpression;
    export function $(kind: "functionExpression", props: FunctionExpressionProps): ts.FunctionExpression;
    export function $(kind: "arrowFunction", props: ArrowFunctionProps): ts.ArrowFunction;
    export function $(kind: "delete", props: DeleteProps): ts.DeleteExpression;
    export function $(kind: "typeOf", props: TypeOfProps): ts.TypeOfExpression;
    export function $(kind: "void", props: VoidProps): ts.VoidExpression;
    export function $(kind: "await", props: AwaitProps): ts.AwaitExpression;
    export function $(kind: "prefix", props: PrefixProps): ts.PrefixUnaryExpression;
    export function $(kind: "postfix", props: PostfixProps): ts.PostfixUnaryExpression;
    export function $(kind: "binary", props: BinaryProps): ts.BinaryExpression;
    export function $(kind: "templateExpression", props: TemplateExpressionProps): ts.TemplateExpression;
    export function $(kind: "templateHead", props: TemplateHeadProps): ts.TemplateHead;
    export function $(kind: "templateMiddle", props: TemplateMiddleProps): ts.TemplateMiddle;
    export function $(kind: "templateTail", props: TemplateTailProps): ts.TemplateTail;
    export function $(kind: "noSubstitutionTemplateLiteral", props: NoSubstitutionTemplateLiteralProps): ts.NoSubstitutionTemplateLiteral;
    export function $(kind: "spread", props: SpreadProps): ts.SpreadElement;
    export function $(kind: "classExpression", props: ClassExpressionProps): ts.ClassExpression;
    export function $(kind: "omittedExpression", props: OmittedExpressionProps): ts.OmittedExpression;
    export function $(kind: "expressionWithTypeArguments", props: ExpressionWithTypeArgumentsProps): ts.ExpressionWithTypeArguments;
    export function $(kind: "asExpression", props: AsExpressionProps): ts.AsExpression;
    export function $(kind: "nonNullExpression", props: NonNullExpressionProps): ts.NonNullExpression;
    export function $(kind: "metaProperty", props: MetaPropertyProps): ts.MetaProperty;
    export function $(kind: "templateSpan", props: TemplateSpanProps): ts.TemplateSpan;
    export function $(kind: "semicolonClassElement", props: SemicolonClassElementProps): ts.SemicolonClassElement;
    export function $(kind: "block", props: BlockProps): ts.Block;
    export function $(kind: "variableStatement", props: VariableStatementProps): ts.VariableStatement;
    export function $(kind: "emptyStatement", props: EmptyStatementProps): ts.EmptyStatement;
    export function $(kind: "expressionStatement", props: ExpressionStatementProps): ts.ExpressionStatement;
    export function $(kind: "if", props: IfProps): ts.IfStatement;
    export function $(kind: "do", props: DoProps): ts.DoStatement;
    export function $(kind: "while", props: WhileProps): ts.WhileStatement;
    export function $(kind: "for", props: ForProps): ts.ForStatement;
    export function $(kind: "forIn", props: ForInProps): ts.ForInStatement;
    export function $(kind: "forOf", props: ForOfProps): ts.ForOfStatement;
    export function $(kind: "continue", props: ContinueProps): ts.ContinueStatement;
    export function $(kind: "break", props: BreakProps): ts.BreakStatement;
    export function $(kind: "return", props: ReturnProps): ts.ReturnStatement;
    export function $(kind: "with", props: WithProps): ts.WithStatement;
    export function $(kind: "switch", props: SwitchProps): ts.SwitchStatement;
    export function $(kind: "label", props: LabelProps): ts.LabeledStatement;
    export function $(kind: "throw", props: ThrowProps): ts.ThrowStatement;
    export function $(kind: "try", props: TryProps): ts.TryStatement;
    export function $(kind: "debuggerStatement", props: DebuggerStatementProps): ts.DebuggerStatement;
    export function $(kind: "variableDeclaration", props: VariableDeclarationProps): ts.VariableDeclaration;
    export function $(kind: "variableDeclarationList", props: VariableDeclarationListProps): ts.VariableDeclarationList;
    export function $(kind: "functionDeclaration", props: FunctionDeclarationProps): ts.FunctionDeclaration;
    export function $(kind: "classDeclaration", props: ClassDeclarationProps): ts.ClassDeclaration;
    export function $(kind: "interfaceDeclaration", props: InterfaceDeclarationProps): ts.InterfaceDeclaration;
    export function $(kind: "typeAliasDeclaration", props: TypeAliasDeclarationProps): ts.TypeAliasDeclaration;
    export function $(kind: "enumDeclaration", props: EnumDeclarationProps): ts.EnumDeclaration;
    export function $(kind: "moduleDeclaration", props: ModuleDeclarationProps): ts.ModuleDeclaration;
    export function $(kind: "moduleBlock", props: ModuleBlockProps): ts.ModuleBlock;
    export function $(kind: "caseBlock", props: CaseBlockProps): ts.CaseBlock;
    export function $(kind: "namespaceExportDeclaration", props: NamespaceExportDeclarationProps): ts.NamespaceExportDeclaration;
    export function $(kind: "importEqualsDeclaration", props: ImportEqualsDeclarationProps): ts.ImportEqualsDeclaration;
    export function $(kind: "importDeclaration", props: ImportDeclarationProps): ts.ImportDeclaration;
    export function $(kind: "importClause", props: ImportClauseProps): ts.ImportClause;
    export function $(kind: "namespaceImport", props: NamespaceImportProps): ts.NamespaceImport;
    export function $(kind: "namedImports", props: NamedImportsProps): ts.NamedImports;
    export function $(kind: "importSpecifier", props: ImportSpecifierProps): ts.ImportSpecifier;
    export function $(kind: "exportAssignment", props: ExportAssignmentProps): ts.ExportAssignment;
    export function $(kind: "exportDeclaration", props: ExportDeclarationProps): ts.ExportDeclaration;
    export function $(kind: "namedExports", props: NamedExportsProps): ts.NamedExports;
    export function $(kind: "exportSpecifier", props: ExportSpecifierProps): ts.ExportSpecifier;
    export function $(kind: "externalModuleReference", props: ExternalModuleReferenceProps): ts.ExternalModuleReference;
    export function $(kind: "jsxElement", props: JsxElementProps): ts.JsxElement;
    export function $(kind: "jsxSelfClosingElement", props: JsxSelfClosingElementProps): ts.JsxSelfClosingElement;
    export function $(kind: "jsxOpeningElement", props: JsxOpeningElementProps): ts.JsxOpeningElement;
    export function $(kind: "jsxClosingElement", props: JsxClosingElementProps): ts.JsxClosingElement;
    export function $(kind: "jsxFragment", props: JsxFragmentProps): ts.JsxFragment;
    export function $(kind: "jsxText", props: JsxTextProps): ts.JsxText;
    export function $(kind: "jsxOpeningFragment", props: JsxOpeningFragmentProps): ts.JsxOpeningFragment;
    export function $(kind: "jsxJsxClosingFragment", props: JsxJsxClosingFragmentProps): ts.JsxClosingFragment;
    export function $(kind: "jsxAttribute", props: JsxAttributeProps): ts.JsxAttribute;
    export function $(kind: "jsxSpreadAttribute", props: JsxSpreadAttributeProps): ts.JsxSpreadAttribute;
    export function $(kind: "jsxExpression", props: JsxExpressionProps): ts.JsxExpression;
    export function $(kind: "caseClause", props: CaseClauseProps): ts.CaseClause;
    export function $(kind: "defaultClause", props: DefaultClauseProps): ts.DefaultClause;
    export function $(kind: "heritageClause", props: HeritageClauseProps): ts.HeritageClause;
    export function $(kind: "catchClause", props: CatchClauseProps): ts.CatchClause;
    export function $(kind: "propertyAssignment", props: PropertyAssignmentProps): ts.PropertyAssignment;
    export function $(kind: "shorthandPropertyAssignment", props: ShorthandPropertyAssignmentProps): ts.ShorthandPropertyAssignment;
    export function $(kind: "spreadAssignment", props: SpreadAssignmentProps): ts.SpreadAssignment;
    export function $(kind: "enumMember", props: EnumMemberProps): ts.EnumMember;
    export function $(kind: "notEmittedStatement", props: NotEmittedStatementProps): ts.NotEmittedStatement;
    export function $(kind: "partiallyEmittedExpression", props: PartiallyEmittedExpressionProps): ts.PartiallyEmittedExpression;
    export function $(kind: "commaList", props: CommaListProps): ts.CommaListExpression;
    export function $(kind: "bundle", props: BundleProps): ts.Bundle;
    export function $(kind: "comma", props: CommaProps): ts.Expression;
    export function $(kind: "lessThan", props: LessThanProps): ts.Expression;
    export function $(kind: "assignment", props: AssignmentProps): ts.BinaryExpression;
    export function $(kind: "strictEquality", props: StrictEqualityProps): ts.BinaryExpression;
    export function $(kind: "strictInequality", props: StrictInequalityProps): ts.BinaryExpression;
    export function $(kind: "add", props: AddProps): ts.BinaryExpression;
    export function $(kind: "subtract", props: SubtractProps): ts.BinaryExpression;
    export function $(kind: "postfixIncrement", props: PostfixIncrementProps): ts.PostfixUnaryExpression;
    export function $(kind: "logicalAnd", props: LogicalAndProps): ts.BinaryExpression;
    export function $(kind: "logicalOr", props: LogicalOrProps): ts.BinaryExpression;
    export function $(kind: "nullishCoalesce", props: NullishCoalesceProps): ts.BinaryExpression;
    export function $(kind: "logicalNot", props: LogicalNotProps): ts.PrefixUnaryExpression;
    export function $(kind: "voidZero", props: VoidZeroProps): ts.VoidExpression;
    export function $(kind: "exportDefault", props: ExportDefaultProps): ts.ExportAssignment;
    export function $(kind: "externalModuleExport", props: ExternalModuleExportProps): ts.ExportDeclaration;
    export function $(kind: any, props: any): ts.Node {
        if (typeof kind === "function")
            return kind(props);
        switch (kind) {
            case "node": return AstsxCreateNode(props);
            case "numericLiteral": return AstsxCreateNumericLiteral(props);
            case "bigIntLiteral": return AstsxCreateBigIntLiteral(props);
            case "stringLiteral": return AstsxCreateStringLiteral(props);
            case "regularExpressionLiteral": return AstsxCreateRegularExpressionLiteral(props);
            case "identifier": return AstsxCreateIdentifier(props);
            case "tempVariable": return AstsxCreateTempVariable(props);
            case "loopVariable": return AstsxCreateLoopVariable(props);
            case "uniqueName": return AstsxCreateUniqueName(props);
            case "optimisticUniqueName": return AstsxCreateOptimisticUniqueName(props);
            case "fileLevelUniqueName": return AstsxCreateFileLevelUniqueName(props);
            case "super": return AstsxCreateSuper(props);
            case "qualifiedName": return AstsxCreateQualifiedName(props);
            case "computedPropertyName": return AstsxCreateComputedPropertyName(props);
            case "typeParameterDeclaration": return AstsxCreateTypeParameterDeclaration(props);
            case "parameter": return AstsxCreateParameter(props);
            case "decorator": return AstsxCreateDecorator(props);
            case "propertySignature": return AstsxCreatePropertySignature(props);
            case "property": return AstsxCreateProperty(props);
            case "methodSignature": return AstsxCreateMethodSignature(props);
            case "method": return AstsxCreateMethod(props);
            case "constructor": return AstsxCreateConstructor(props);
            case "getAccessor": return AstsxCreateGetAccessor(props);
            case "setAccessor": return AstsxCreateSetAccessor(props);
            case "callSignature": return AstsxCreateCallSignature(props);
            case "constructSignature": return AstsxCreateConstructSignature(props);
            case "indexSignature": return AstsxCreateIndexSignature(props);
            case "keywordTypeNode": return AstsxCreateKeywordTypeNode(props);
            case "typePredicateNode": return AstsxCreateTypePredicateNode(props);
            case "typePredicateNodeWithModifier": return AstsxCreateTypePredicateNodeWithModifier(props);
            case "typeReferenceNode": return AstsxCreateTypeReferenceNode(props);
            case "functionTypeNode": return AstsxCreateFunctionTypeNode(props);
            case "constructorTypeNode": return AstsxCreateConstructorTypeNode(props);
            case "typeQueryNode": return AstsxCreateTypeQueryNode(props);
            case "typeLiteralNode": return AstsxCreateTypeLiteralNode(props);
            case "arrayTypeNode": return AstsxCreateArrayTypeNode(props);
            case "tupleTypeNode": return AstsxCreateTupleTypeNode(props);
            case "optionalTypeNode": return AstsxCreateOptionalTypeNode(props);
            case "restTypeNode": return AstsxCreateRestTypeNode(props);
            case "unionTypeNode": return AstsxCreateUnionTypeNode(props);
            case "intersectionTypeNode": return AstsxCreateIntersectionTypeNode(props);
            case "conditionalTypeNode": return AstsxCreateConditionalTypeNode(props);
            case "inferTypeNode": return AstsxCreateInferTypeNode(props);
            case "importTypeNode": return AstsxCreateImportTypeNode(props);
            case "parenthesizedType": return AstsxCreateParenthesizedType(props);
            case "thisTypeNode": return AstsxCreateThisTypeNode(props);
            case "indexedAccessTypeNode": return AstsxCreateIndexedAccessTypeNode(props);
            case "mappedTypeNode": return AstsxCreateMappedTypeNode(props);
            case "literalTypeNode": return AstsxCreateLiteralTypeNode(props);
            case "objectBindingPattern": return AstsxCreateObjectBindingPattern(props);
            case "arrayBindingPattern": return AstsxCreateArrayBindingPattern(props);
            case "bindingElement": return AstsxCreateBindingElement(props);
            case "arrayLiteral": return AstsxCreateArrayLiteral(props);
            case "propertyAccess": return AstsxCreatePropertyAccess(props);
            case "propertyAccessChain": return AstsxCreatePropertyAccessChain(props);
            case "elementAccess": return AstsxCreateElementAccess(props);
            case "elementAccessChain": return AstsxCreateElementAccessChain(props);
            case "call": return AstsxCreateCall(props);
            case "callChain": return AstsxCreateCallChain(props);
            case "new": return AstsxCreateNew(props);
            case "typeAssertion": return AstsxCreateTypeAssertion(props);
            case "paren": return AstsxCreateParen(props);
            case "functionExpression": return AstsxCreateFunctionExpression(props);
            case "arrowFunction": return AstsxCreateArrowFunction(props);
            case "delete": return AstsxCreateDelete(props);
            case "typeOf": return AstsxCreateTypeOf(props);
            case "void": return AstsxCreateVoid(props);
            case "await": return AstsxCreateAwait(props);
            case "prefix": return AstsxCreatePrefix(props);
            case "postfix": return AstsxCreatePostfix(props);
            case "binary": return AstsxCreateBinary(props);
            case "templateExpression": return AstsxCreateTemplateExpression(props);
            case "templateHead": return AstsxCreateTemplateHead(props);
            case "templateMiddle": return AstsxCreateTemplateMiddle(props);
            case "templateTail": return AstsxCreateTemplateTail(props);
            case "noSubstitutionTemplateLiteral": return AstsxCreateNoSubstitutionTemplateLiteral(props);
            case "spread": return AstsxCreateSpread(props);
            case "classExpression": return AstsxCreateClassExpression(props);
            case "omittedExpression": return AstsxCreateOmittedExpression(props);
            case "expressionWithTypeArguments": return AstsxCreateExpressionWithTypeArguments(props);
            case "asExpression": return AstsxCreateAsExpression(props);
            case "nonNullExpression": return AstsxCreateNonNullExpression(props);
            case "metaProperty": return AstsxCreateMetaProperty(props);
            case "templateSpan": return AstsxCreateTemplateSpan(props);
            case "semicolonClassElement": return AstsxCreateSemicolonClassElement(props);
            case "block": return AstsxCreateBlock(props);
            case "variableStatement": return AstsxCreateVariableStatement(props);
            case "emptyStatement": return AstsxCreateEmptyStatement(props);
            case "expressionStatement": return AstsxCreateExpressionStatement(props);
            case "if": return AstsxCreateIf(props);
            case "do": return AstsxCreateDo(props);
            case "while": return AstsxCreateWhile(props);
            case "for": return AstsxCreateFor(props);
            case "forIn": return AstsxCreateForIn(props);
            case "forOf": return AstsxCreateForOf(props);
            case "continue": return AstsxCreateContinue(props);
            case "break": return AstsxCreateBreak(props);
            case "return": return AstsxCreateReturn(props);
            case "with": return AstsxCreateWith(props);
            case "switch": return AstsxCreateSwitch(props);
            case "label": return AstsxCreateLabel(props);
            case "throw": return AstsxCreateThrow(props);
            case "try": return AstsxCreateTry(props);
            case "debuggerStatement": return AstsxCreateDebuggerStatement(props);
            case "variableDeclaration": return AstsxCreateVariableDeclaration(props);
            case "variableDeclarationList": return AstsxCreateVariableDeclarationList(props);
            case "functionDeclaration": return AstsxCreateFunctionDeclaration(props);
            case "classDeclaration": return AstsxCreateClassDeclaration(props);
            case "interfaceDeclaration": return AstsxCreateInterfaceDeclaration(props);
            case "typeAliasDeclaration": return AstsxCreateTypeAliasDeclaration(props);
            case "enumDeclaration": return AstsxCreateEnumDeclaration(props);
            case "moduleDeclaration": return AstsxCreateModuleDeclaration(props);
            case "moduleBlock": return AstsxCreateModuleBlock(props);
            case "caseBlock": return AstsxCreateCaseBlock(props);
            case "namespaceExportDeclaration": return AstsxCreateNamespaceExportDeclaration(props);
            case "importEqualsDeclaration": return AstsxCreateImportEqualsDeclaration(props);
            case "importDeclaration": return AstsxCreateImportDeclaration(props);
            case "importClause": return AstsxCreateImportClause(props);
            case "namespaceImport": return AstsxCreateNamespaceImport(props);
            case "namedImports": return AstsxCreateNamedImports(props);
            case "importSpecifier": return AstsxCreateImportSpecifier(props);
            case "exportAssignment": return AstsxCreateExportAssignment(props);
            case "exportDeclaration": return AstsxCreateExportDeclaration(props);
            case "namedExports": return AstsxCreateNamedExports(props);
            case "exportSpecifier": return AstsxCreateExportSpecifier(props);
            case "externalModuleReference": return AstsxCreateExternalModuleReference(props);
            case "jsxElement": return AstsxCreateJsxElement(props);
            case "jsxSelfClosingElement": return AstsxCreateJsxSelfClosingElement(props);
            case "jsxOpeningElement": return AstsxCreateJsxOpeningElement(props);
            case "jsxClosingElement": return AstsxCreateJsxClosingElement(props);
            case "jsxFragment": return AstsxCreateJsxFragment(props);
            case "jsxText": return AstsxCreateJsxText(props);
            case "jsxOpeningFragment": return AstsxCreateJsxOpeningFragment(props);
            case "jsxJsxClosingFragment": return AstsxCreateJsxJsxClosingFragment(props);
            case "jsxAttribute": return AstsxCreateJsxAttribute(props);
            case "jsxSpreadAttribute": return AstsxCreateJsxSpreadAttribute(props);
            case "jsxExpression": return AstsxCreateJsxExpression(props);
            case "caseClause": return AstsxCreateCaseClause(props);
            case "defaultClause": return AstsxCreateDefaultClause(props);
            case "heritageClause": return AstsxCreateHeritageClause(props);
            case "catchClause": return AstsxCreateCatchClause(props);
            case "propertyAssignment": return AstsxCreatePropertyAssignment(props);
            case "shorthandPropertyAssignment": return AstsxCreateShorthandPropertyAssignment(props);
            case "spreadAssignment": return AstsxCreateSpreadAssignment(props);
            case "enumMember": return AstsxCreateEnumMember(props);
            case "notEmittedStatement": return AstsxCreateNotEmittedStatement(props);
            case "partiallyEmittedExpression": return AstsxCreatePartiallyEmittedExpression(props);
            case "commaList": return AstsxCreateCommaList(props);
            case "bundle": return AstsxCreateBundle(props);
            case "comma": return AstsxCreateComma(props);
            case "lessThan": return AstsxCreateLessThan(props);
            case "assignment": return AstsxCreateAssignment(props);
            case "strictEquality": return AstsxCreateStrictEquality(props);
            case "strictInequality": return AstsxCreateStrictInequality(props);
            case "add": return AstsxCreateAdd(props);
            case "subtract": return AstsxCreateSubtract(props);
            case "postfixIncrement": return AstsxCreatePostfixIncrement(props);
            case "logicalAnd": return AstsxCreateLogicalAnd(props);
            case "logicalOr": return AstsxCreateLogicalOr(props);
            case "nullishCoalesce": return AstsxCreateNullishCoalesce(props);
            case "logicalNot": return AstsxCreateLogicalNot(props);
            case "voidZero": return AstsxCreateVoidZero(props);
            case "exportDefault": return AstsxCreateExportDefault(props);
            case "externalModuleExport": return AstsxCreateExternalModuleExport(props);
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
            node: Astsx.NodeProps;
            numericLiteral: Astsx.NumericLiteralProps;
            bigIntLiteral: Astsx.BigIntLiteralProps;
            stringLiteral: Astsx.StringLiteralProps;
            regularExpressionLiteral: Astsx.RegularExpressionLiteralProps;
            identifier: Astsx.IdentifierProps;
            tempVariable: Astsx.TempVariableProps;
            loopVariable: Astsx.LoopVariableProps;
            uniqueName: Astsx.UniqueNameProps;
            optimisticUniqueName: Astsx.OptimisticUniqueNameProps;
            fileLevelUniqueName: Astsx.FileLevelUniqueNameProps;
            super: Astsx.SuperProps;
            qualifiedName: Astsx.QualifiedNameProps;
            computedPropertyName: Astsx.ComputedPropertyNameProps;
            typeParameterDeclaration: Astsx.TypeParameterDeclarationProps;
            parameter: Astsx.ParameterProps;
            decorator: Astsx.DecoratorProps;
            propertySignature: Astsx.PropertySignatureProps;
            property: Astsx.PropertyProps;
            methodSignature: Astsx.MethodSignatureProps;
            method: Astsx.MethodProps;
            constructor: Astsx.ConstructorProps;
            getAccessor: Astsx.GetAccessorProps;
            setAccessor: Astsx.SetAccessorProps;
            callSignature: Astsx.CallSignatureProps;
            constructSignature: Astsx.ConstructSignatureProps;
            indexSignature: Astsx.IndexSignatureProps;
            keywordTypeNode: Astsx.KeywordTypeNodeProps;
            typePredicateNode: Astsx.TypePredicateNodeProps;
            typePredicateNodeWithModifier: Astsx.TypePredicateNodeWithModifierProps;
            typeReferenceNode: Astsx.TypeReferenceNodeProps;
            functionTypeNode: Astsx.FunctionTypeNodeProps;
            constructorTypeNode: Astsx.ConstructorTypeNodeProps;
            typeQueryNode: Astsx.TypeQueryNodeProps;
            typeLiteralNode: Astsx.TypeLiteralNodeProps;
            arrayTypeNode: Astsx.ArrayTypeNodeProps;
            tupleTypeNode: Astsx.TupleTypeNodeProps;
            optionalTypeNode: Astsx.OptionalTypeNodeProps;
            restTypeNode: Astsx.RestTypeNodeProps;
            unionTypeNode: Astsx.UnionTypeNodeProps;
            intersectionTypeNode: Astsx.IntersectionTypeNodeProps;
            conditionalTypeNode: Astsx.ConditionalTypeNodeProps;
            inferTypeNode: Astsx.InferTypeNodeProps;
            importTypeNode: Astsx.ImportTypeNodeProps;
            parenthesizedType: Astsx.ParenthesizedTypeProps;
            thisTypeNode: Astsx.ThisTypeNodeProps;
            indexedAccessTypeNode: Astsx.IndexedAccessTypeNodeProps;
            mappedTypeNode: Astsx.MappedTypeNodeProps;
            literalTypeNode: Astsx.LiteralTypeNodeProps;
            objectBindingPattern: Astsx.ObjectBindingPatternProps;
            arrayBindingPattern: Astsx.ArrayBindingPatternProps;
            bindingElement: Astsx.BindingElementProps;
            arrayLiteral: Astsx.ArrayLiteralProps;
            propertyAccess: Astsx.PropertyAccessProps;
            propertyAccessChain: Astsx.PropertyAccessChainProps;
            elementAccess: Astsx.ElementAccessProps;
            elementAccessChain: Astsx.ElementAccessChainProps;
            call: Astsx.CallProps;
            callChain: Astsx.CallChainProps;
            new: Astsx.NewProps;
            typeAssertion: Astsx.TypeAssertionProps;
            paren: Astsx.ParenProps;
            functionExpression: Astsx.FunctionExpressionProps;
            arrowFunction: Astsx.ArrowFunctionProps;
            delete: Astsx.DeleteProps;
            typeOf: Astsx.TypeOfProps;
            void: Astsx.VoidProps;
            await: Astsx.AwaitProps;
            prefix: Astsx.PrefixProps;
            postfix: Astsx.PostfixProps;
            binary: Astsx.BinaryProps;
            templateExpression: Astsx.TemplateExpressionProps;
            templateHead: Astsx.TemplateHeadProps;
            templateMiddle: Astsx.TemplateMiddleProps;
            templateTail: Astsx.TemplateTailProps;
            noSubstitutionTemplateLiteral: Astsx.NoSubstitutionTemplateLiteralProps;
            spread: Astsx.SpreadProps;
            classExpression: Astsx.ClassExpressionProps;
            omittedExpression: Astsx.OmittedExpressionProps;
            expressionWithTypeArguments: Astsx.ExpressionWithTypeArgumentsProps;
            asExpression: Astsx.AsExpressionProps;
            nonNullExpression: Astsx.NonNullExpressionProps;
            metaProperty: Astsx.MetaPropertyProps;
            templateSpan: Astsx.TemplateSpanProps;
            semicolonClassElement: Astsx.SemicolonClassElementProps;
            block: Astsx.BlockProps;
            variableStatement: Astsx.VariableStatementProps;
            emptyStatement: Astsx.EmptyStatementProps;
            expressionStatement: Astsx.ExpressionStatementProps;
            if: Astsx.IfProps;
            do: Astsx.DoProps;
            while: Astsx.WhileProps;
            for: Astsx.ForProps;
            forIn: Astsx.ForInProps;
            forOf: Astsx.ForOfProps;
            continue: Astsx.ContinueProps;
            break: Astsx.BreakProps;
            return: Astsx.ReturnProps;
            with: Astsx.WithProps;
            switch: Astsx.SwitchProps;
            label: Astsx.LabelProps;
            throw: Astsx.ThrowProps;
            try: Astsx.TryProps;
            debuggerStatement: Astsx.DebuggerStatementProps;
            variableDeclaration: Astsx.VariableDeclarationProps;
            variableDeclarationList: Astsx.VariableDeclarationListProps;
            functionDeclaration: Astsx.FunctionDeclarationProps;
            classDeclaration: Astsx.ClassDeclarationProps;
            interfaceDeclaration: Astsx.InterfaceDeclarationProps;
            typeAliasDeclaration: Astsx.TypeAliasDeclarationProps;
            enumDeclaration: Astsx.EnumDeclarationProps;
            moduleDeclaration: Astsx.ModuleDeclarationProps;
            moduleBlock: Astsx.ModuleBlockProps;
            caseBlock: Astsx.CaseBlockProps;
            namespaceExportDeclaration: Astsx.NamespaceExportDeclarationProps;
            importEqualsDeclaration: Astsx.ImportEqualsDeclarationProps;
            importDeclaration: Astsx.ImportDeclarationProps;
            importClause: Astsx.ImportClauseProps;
            namespaceImport: Astsx.NamespaceImportProps;
            namedImports: Astsx.NamedImportsProps;
            importSpecifier: Astsx.ImportSpecifierProps;
            exportAssignment: Astsx.ExportAssignmentProps;
            exportDeclaration: Astsx.ExportDeclarationProps;
            namedExports: Astsx.NamedExportsProps;
            exportSpecifier: Astsx.ExportSpecifierProps;
            externalModuleReference: Astsx.ExternalModuleReferenceProps;
            jsxElement: Astsx.JsxElementProps;
            jsxSelfClosingElement: Astsx.JsxSelfClosingElementProps;
            jsxOpeningElement: Astsx.JsxOpeningElementProps;
            jsxClosingElement: Astsx.JsxClosingElementProps;
            jsxFragment: Astsx.JsxFragmentProps;
            jsxText: Astsx.JsxTextProps;
            jsxOpeningFragment: Astsx.JsxOpeningFragmentProps;
            jsxJsxClosingFragment: Astsx.JsxJsxClosingFragmentProps;
            jsxAttribute: Astsx.JsxAttributeProps;
            jsxSpreadAttribute: Astsx.JsxSpreadAttributeProps;
            jsxExpression: Astsx.JsxExpressionProps;
            caseClause: Astsx.CaseClauseProps;
            defaultClause: Astsx.DefaultClauseProps;
            heritageClause: Astsx.HeritageClauseProps;
            catchClause: Astsx.CatchClauseProps;
            propertyAssignment: Astsx.PropertyAssignmentProps;
            shorthandPropertyAssignment: Astsx.ShorthandPropertyAssignmentProps;
            spreadAssignment: Astsx.SpreadAssignmentProps;
            enumMember: Astsx.EnumMemberProps;
            notEmittedStatement: Astsx.NotEmittedStatementProps;
            partiallyEmittedExpression: Astsx.PartiallyEmittedExpressionProps;
            commaList: Astsx.CommaListProps;
            bundle: Astsx.BundleProps;
            comma: Astsx.CommaProps;
            lessThan: Astsx.LessThanProps;
            assignment: Astsx.AssignmentProps;
            strictEquality: Astsx.StrictEqualityProps;
            strictInequality: Astsx.StrictInequalityProps;
            add: Astsx.AddProps;
            subtract: Astsx.SubtractProps;
            postfixIncrement: Astsx.PostfixIncrementProps;
            logicalAnd: Astsx.LogicalAndProps;
            logicalOr: Astsx.LogicalOrProps;
            nullishCoalesce: Astsx.NullishCoalesceProps;
            logicalNot: Astsx.LogicalNotProps;
            voidZero: Astsx.VoidZeroProps;
            exportDefault: Astsx.ExportDefaultProps;
            externalModuleExport: Astsx.ExternalModuleExportProps;
        }
    }
}
export = Astsx;

