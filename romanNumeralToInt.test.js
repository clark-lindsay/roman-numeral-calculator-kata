const romanNumeralToInt = require('./romanNumeralToInt');

describe('Roman numeral to integer translator', () => {
    it('can convert an "I" into a 1', () => {
        expect(romanNumeralToInt('I')).toEqual(1);
    });

    it('is case insensitive for handling conversions', () => {
        expect(romanNumeralToInt('i')).toEqual(1);
    });

    /*it('it can convert a "V" into a 5', () => {
        expect(romanNumeralToInt('V'))
    });*/
});