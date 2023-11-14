/**
* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*
* An input string is valid if:
*
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.
*
* IOCE:
* Input: string of characters
* Output: boolean
* Contraints: n/a
* Edge Cases: n/a => should handle nested brackets
*
* Strategy:
* Stack -> FILO
* track corresponding bracket types
*

* @param {string} s
* @return {boolean}
*/

const isValidParentheses = (s) => {

  let brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  let stack = [];

  for (let char of s) {
    if (!brackets[char]) {
      stack.push(char);
    } else if (brackets[char] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return true && !stack.length;
};

let s = '()';
let expected = true;
console.log(isValidParentheses(s), 'should be', expected);

s = '()[]{}';
expected = true;
console.log(isValidParentheses(s), 'should be', expected);

s = '(]';
expected = false;
console.log(isValidParentheses(s), 'should be', expected);