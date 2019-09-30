const romanNumeralToInt = require('./romanNumeralToInt');

describe('Roman numeral to integer translator', () => {
    it('can convert an "I" into a 1', () => {
        expect(romanNumeralToInt('I')).toEqual(1);
    });
});