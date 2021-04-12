/**
 * Parses a path function expression.
 * @param expression The path expression to parse
 */
export function parsePathExpression(
    expression: (source: any) => unknown) {

    /** The path items. */
    const path: (string | number)[] = [];

    /**
     * The proxy visiting the expression.
     *
     * > There is a side effect with the path declared above.
     * This way of building the path items allows optimal performances while parsing the expression.
     * */
    const visitor: any = new Proxy({}, {
        get: function (_, prop: string) {
            // The step is recorded into the path instance
            path.push(prop.match(/^\d+$/) ? +prop : prop);

            // The visitor is injected to the next property access
            return visitor;
        }
    });

    // Invocation of the expression with the visitor
    expression(visitor);

    return path;
}

