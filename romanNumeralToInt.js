export function romanNumeralToInt(romanNumeral) {
    const upperCaseRomanNumeral = [...(romanNumeral.toUpperCase())];
    const romanNumeralToIntLookupTable = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    var result = 0;

    for (const [index, char] of upperCaseRomanNumeral.entries()) {
        const currentValue = romanNumeralToIntLookupTable[char];

        if (index === upperCaseRomanNumeral.length - 1) (result += currentValue);
        else {
            const nextValue = romanNumeralToIntLookupTable[upperCaseRomanNumeral[index + 1]];

            if (currentValue < nextValue) (result -= currentValue);
            else (result += currentValue);
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