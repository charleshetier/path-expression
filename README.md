# path-expression
Property path creation from an expression

Basicaly converts expression
```typescript
o => o.foo.bar
``` 
into 
```typescript
['foo', 'bar']
```

# Installation
using npm :
```
npm i path-expression
```

or using yarn :
```
yarn add path-expression
```

## Usage
for basic case :
```typescript
import {parsePathExpression} from 'path-expression';

const result = parsePathExpression(o => o.foo);
expect(result).toEqual(['foo']);
```

...and more complex cases :
```typescript
import {parsePathExpression} from 'path-expression';

const myVar1 = 5;
const myVar2 = 'bar';
const result = parsePathExpression(o => o[1][myVar1].foo[myVar2]);

expect(result).toEqual([1, 5, 'foo', 'bar']);
```

## Compatibility
The [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object support is required.