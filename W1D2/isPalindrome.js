// https://leetcode.com/problems/valid-palindrome/
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
*/

// 1. IOCE
// INPUT: string
// OUTPUT: boolean
// CONSTRAINTS: min length of 1, up to 2 * 10^5, only ASCII characters
// EDGE CASES: after removal of non-alphanumeric characeters length = 0 => true
//
// 2. STRATEGY
// use regex to replace remove non alphanumeric characters
// set all characters to lowercase
// compare strings forward and backward

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  return s === s.split('').reverse().join('');
};