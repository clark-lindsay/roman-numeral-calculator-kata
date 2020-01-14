import { romanNumeralToInt } from './romanNumeralToInt';

export function applyBinaryOperatorToRomanNumerals(firstOperand, operator, secondOperand) {
    if (operator === '-') return romanNumeralToInt(firstOperand) - romanNumeralToInt(secondOperand);
    return romanNumeralToInt(firstOperand) + romanNumeralToInt(secondOperand);
}