import { parsePathExpression } from '.';

describe('parseExpression', () => {
    describe('basic path construction', () => {
        it('should provide a path with only basic properties access', () => {
            const result = parsePathExpression(o => o.prop1);
            expect(result).toEqual(['prop1']);
        });
    });

    describe('complex path construction', ()=> {
        it('should provide a path with array key access', () => {
            const result = parsePathExpression(o => o.prop1[2].sub);
            expect(result).toEqual(['prop1', 2, 'sub']);
        });

        it('should provide a path with variable item', () => {
            const myVar = 5;
            const result = parsePathExpression(o => o.prop1[myVar].sub);
            expect(result).toEqual(['prop1', myVar, 'sub']);
        });

        it('should provide a path with various path items', () => {
            const myVar1 = 5;
            const myVar2 = 'toto';
            const result = parsePathExpression(o => o[5][myVar1].prop1[myVar2]);
            expect(result).toEqual([5, myVar1, 'prop1', myVar2]);
        })
    })
});
