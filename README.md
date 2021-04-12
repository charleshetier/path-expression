# path-expression
Property path string creation from an expression

## Usage
```typescript
import {parsePathExpression} from 'path-expression';

const result = parsePathExpression(o => o.prop1);
expect(result).toEqual(['prop1']);
```

even with more complex expressions:
```typescript
import {parsePathExpression} from 'path-expression';

const myVar1 = 5;
const myVar2 = 'toto';
const result = parsePathExpression(o => o[5][myVar1].prop1[myVar2]);

expect(result).toEqual([5, myVar1, 'prop1', myVar2]);
```

## Compatibility
The Proxy object support is required.