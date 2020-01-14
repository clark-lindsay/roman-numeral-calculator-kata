import { romanNumeralToInt } from './romanNumeralToInt';

export function applyBinaryOperatorToRomanNumerals(firstOperand, operator, secondOperand) {
    return romanNumeralToInt(firstOperand) + romanNumeralToInt(secondOperand);
}