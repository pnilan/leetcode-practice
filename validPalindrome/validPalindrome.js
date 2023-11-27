/**
 * valid palindrome is a phrase that read the same forwards as backward
 * remove all non-alphanumeric characters, set all as lowercase
 *
 * given a string, s, return true if it is a valid palindrome, return false if it is not
 *
 * IOCE
 * Input: string, s
 * Output: boolean
 * Constraints: s only constsis of ASCII characters
 * Edge Cases: empty string is a palindrome -- read same forward and backward
 *
 * Strategy:
 * Two pointers
 * pointer L at start of string
 * pointer R at end of string
 * if the characters match, then increment
 * if the caharacters do not match return false
 *
 * once index of R is less than or equal to index of L, break loop, return true
 *
 * @param {string} s
 * @returns {boolean}
 */

const isValidPalindrome = (s) => {

  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let leftIdx = 0;
  let rightIdx = s.length - 1;

  while (rightIdx > leftIdx) {
    if (s[leftIdx] !== s[rightIdx]) {
      console.log(leftIdx, rightIdx);
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
};

let s = 'A man, a plan, a canal: Panama';
let expected = true;
let actual = isValidPalindrome(s);
console.log(`Expected: ${expected}, actual is: ${actual}. Correct answer? ${actual === expected}`);

s = 'race a car';
expected = false;
actual = isValidPalindrome(s);
console.log(`Expected: ${expected}, actual is: ${actual}. Correct answer? ${actual === expected}`);

s = ' ';
expected = true;
actual = isValidPalindrome(s);
console.log(`Expected: ${expected}, actual is: ${actual}. Correct answer? ${actual === expected}`);