import { romanNumeralToInt } from './romanNumeralToInt';

export function applyBinaryOperatorToRomanNumerals(firstOperand, operator, secondOperand) {
    const valueOfFirstOperand = romanNumeralToInt(firstOperand);
    const valueOfSecondOperand = romanNumeralToInt(secondOperand);

    if (operator === '-') return valueOfFirstOperand - valueOfSecondOperand;
    if (operator === '*') return valueOfFirstOperand * valueOfSecondOperand;
    if (operator === '/') return valueOfFirstOperand / valueOfSecondOperand;
    return valueOfFirstOperand + valueOfSecondOperand;
}