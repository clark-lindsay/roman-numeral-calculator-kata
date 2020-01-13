import { romanNumeralToInt, InvalidRomanNumeralError } from './romanNumeralToInt';

describe('Roman numeral to integer translator', () => {
    it('is case insensitive for handling conversions', () => {
        expect(romanNumeralToInt('i')).toEqual(1);
        expect(romanNumeralToInt('l')).toEqual(50);
        expect(romanNumeralToInt('m')).toEqual(1000);
    });

    it('can convert a single valid roman numeral into its equivalent number', () => {
        expect(romanNumeralToInt('I')).toEqual(1);
        expect(romanNumeralToInt('L')).toEqual(50);
        expect(romanNumeralToInt('M')).toEqual(1000);
    });

    it('should throw an error if given an invalid roman numeral', () => {
        expect(() => romanNumeralToInt('P')).toThrow(InvalidRomanNumeralError);
        expect(() => romanNumeralToInt('1')).toThrow(InvalidRomanNumeralError);
        expect(() => romanNumeralToInt(25)).toThrow(InvalidRomanNumeralError);
    });

    it('returns 4 when given IV', () => {
        expect(romanNumeralToInt('IV')).toEqual(4);
    });

    it('returns 9 when given IX', () => {
        expect(romanNumeralToInt('IX')).toEqual(9);
    });

    it('returns 19 when given XIX', () => {
        expect(romanNumeralToInt('XIX')).toEqual(19);
    });

    it('can convert strings that use only addition of characters into integers', () => {
        expect(romanNumeralToInt('VII')).toEqual(7);
        expect(romanNumeralToInt('XL')).toEqual(40);
        expect(romanNumeralToInt('MLXII')).toEqual(1062);
    });
});