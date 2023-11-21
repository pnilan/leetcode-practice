/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation
 *
 * Evalate the expression and return an integer that represents the value of the expression.
 *
 * Note:
 * - +,  -, *, / are valid operators
 * - each operand may be an integer or another expression
 * - the divison between two integers always truncates towards zero
 * - there will not be any division by zero
 * - the input represents a valid arithmetic expression in a reverse polish notation
 * - the answer and all intermediate calculations can be represented by a 32-bit integer
 *
 * IOCE:
 * Input: array of strings
 * Output: integer
 * Constraints: 32-bit integer
 * Edge Cases: n/a
 *
 * Strategy
 * Create a stack for operands, push operands to stack, when iterating over an operator, perform that action on the last two values in the operands stack.
 *
 * @param {string[]} tokens
 * @return {number}
 */

const evalPRN = (tokens) => {

  let operators = ['+', '-', '*', '/'];
  let operands = [];

  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      let operator = tokens[i];
      let operandOne = operands.pop();
      let operandTwo = operands.pop();
      if (operator === '+') {
        operands.push(operandOne + operandTwo);
      } else if (operator === '-') {
        operands.push(operandTwo - operandOne);
      } else if (operator === '*') {
        operands.push(operandOne * operandTwo);
      } else {
        operands.push(Math.trunc(operandTwo / operandOne));
      }
    } else {
      operands.push(Number(tokens[i]));
    }
  }

  return operands.pop();
};

let tokens = ['2', '1', '+', '3', '*'];
let expected = 9;
let result = evalPRN(tokens);
console.log(result, 'should be', expected, result === expected);

tokens = ['4', '13', '5', '/', '+'];
expected = 6;
result = evalPRN(tokens);
console.log(evalPRN(tokens), 'should be', expected, result === expected);

tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
expected = 22;
result = evalPRN(tokens);
console.log(evalPRN(tokens), 'should be', expected, result === expected);


