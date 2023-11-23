/**
 * Given n pairs of parentheses, write a function to generate all combos of well-formed parantheses
 *
 * IOCE:
 * Input: integer n
 * Output: array of strings
 * Constraints: 1 <= n <= 8
 * Edge Cases: n/a
 *
 * Strategy
 * Stack
 *
 * Iterate from i = 0 to 2
 * add
 *
 * @param {number} n
 * @return {string[]}
 */

const generateParentheses = (n) => {

  let stack = [];
  let res = [];

  const innerFunction = (open = 0, closed = 0) => {

    if (closed === open && open === n) {
      res.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('(');
      innerFunction(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(')');
      innerFunction(open, closed + 1);
      stack.pop();
    }

  };

  innerFunction();

  return res;

};

let n = 3;
let expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
let result = generateParentheses(n);
console.log(generateParentheses(n), 'should equal', expected, ':', JSON.stringify(expected) === JSON.stringify(result));

n = 1;
expected = ['()'];
result = generateParentheses(n);
console.log(generateParentheses(n), 'should equal', expected, ':', JSON.stringify(expected) === JSON.stringify(result));