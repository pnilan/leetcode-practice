/*
https://leetcode.com/problems/valid-parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

// 1. IOCE
// INPUT: string of parantheses
// OUTPUT: boolean
// CONSTRAINTS: n/a
// EDGE CASES: empty string => true?, not a bracket? => false
//
// 2. STRATEGY
// create an a stack that tracks open brackets
// iterate over string, when encountering an "open" bracket
// push bracket to stack
// when encountering a "closing" bracket, check to see if
// last bracket in open brackets array is the matching counterpart
// if yes, .pop, if no, return false
//

const validParentheses = (s) => {

  if (s.length % 2 !== 0) {
    return false;
  }

  const openingBrackets = ['(', '[', '{'];

  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  var stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === brackets[s[i]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
