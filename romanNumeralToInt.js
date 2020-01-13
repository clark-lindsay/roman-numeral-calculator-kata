export function romanNumeralToInt(romanNumeral) {
    const upperCaseRomanNumeral = romanNumeral.toUpperCase();
    const romanNumeralToIntLookupTable = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const result = romanNumeralToIntLookupTable[upperCaseRomanNumeral];

    if (upperCaseRomanNumeral.length > 1) {
        const [char1Value, char2Value] = [romanNumeralToIntLookupTable[upperCaseRomanNumeral[0]], romanNumeralToIntLookupTable[upperCaseRomanNumeral[1]]];
        if (char2Value > char1Value) {
            return char2Value - char1Value;
        }
    }

    if (!result) {
        throw new InvalidRomanNumeralError('Valid roman numerals are IVX...');
    }

    return result;
}

class InvalidRomanNumeralError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidRomanNumeralError";
    }
}