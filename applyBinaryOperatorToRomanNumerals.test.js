import { applyBinaryOperatorToRomanNumerals } from './applyBinaryOperatorToRomanNumerals';

describe('applying binary operators to roman numerals', () => {
    it('can add two roman numerals', () => {
        expect(applyBinaryOperatorToRomanNumerals('IV', '+', 'I')).toEqual(5);
        expect(applyBinaryOperatorToRomanNumerals('X', '+', 'VI')).toEqual(16);
        expect(applyBinaryOperatorToRomanNumerals('MDL', '+', 'VIII')).toEqual(1558);
    });

    it('can subtract one roman numeral from another', () => {
        expect(applyBinaryOperatorToRomanNumerals('VII', '-', 'IV')).toEqual(3);
        expect(applyBinaryOperatorToRomanNumerals('XLV', '-', 'VII')).toEqual(38);
        expect(applyBinaryOperatorToRomanNumerals('MC', '-', 'D')).toEqual(600);
    });
});