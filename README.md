# path-expression
Property path creation from an expression:

Basicaly converts expression : 
```typescript
o => o.foo.bar
``` 
into 
```typescript
['foo', 'bar']
```

## Usage
for basic case :
```typescript
import {parsePathExpression} from 'path-expression';

const result = parsePathExpression(o => o.prop1);
expect(result).toEqual(['prop1']);
```

...and more complex cases :
```typescript
import {parsePathExpression} from 'path-expression';

const myVar1 = 5;
const myVar2 = 'toto';
const result = parsePathExpression(o => o[5][myVar1].prop1[myVar2]);

expect(result).toEqual([5, myVar1, 'prop1', myVar2]);
```

## Compatibility
The [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object support is required.