/**
 * @param {string} s
 * @return {number}
 */

// IOCE
// Input: string, s
// Output: integer - length of longest substring w/o repeatin chars
// Constraints: n/a
// Edge Cases: s has no length => 0
// Note: s consists of English letters, digits, symbols, spaces

// Strategy
// Create variable to track longest substring length, set to zero
// iterate over s
// create variable that tracks currently considered letters
// iterate again over s from i, if s[k] is not in currently considered letters, push
// if s[k] is in currently considered letters, end inner loop
// if length of current letters is longer than current longest substring, update value
// return length variable

const lengthOfLongestSubstring = (s) => {

  let maxSubLength = 0;

  for (let i = 0; i < s.length; i++) {
    let currentString = '';

    for (let k = i; k < s.length; k++) {
      if (!currentString.includes(s[k])) {
        currentString += s[k];
      } else {
        break;
      }
    }
    maxSubLength = currentString.length > maxSubLength ? currentString.length : maxSubLength;
  }

  return maxSubLength;

};