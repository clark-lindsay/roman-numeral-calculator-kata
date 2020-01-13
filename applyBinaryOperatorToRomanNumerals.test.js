import { applyBinaryOperatorToRomanNumerals } from './applyBinaryOperatorToRomanNumerals';

describe('applying binary operators to roman numerals', () => {
    it('can add two roman numerals', () => {
        expect(applyBinaryOperatorToRomanNumerals('IV', '+', 'I')).toEqual(5);
    });
});