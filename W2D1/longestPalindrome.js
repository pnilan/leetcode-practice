// https://leetcode.com/problems/longest-palindrome/

/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

// 1. IOCE
// Input: string (upper and lower case letters)
// Output: length
// Constraints: n/a
// Edge Cases: N/a
//
// 2. Strategy
// iterate through string, add a count for each letter, track in an object
// a palindrome must be made up of at least 1 letter.
// letters on each end should have a even count
// if the palindrome length is odd, then the middle letter must have an odd count, should prioritize longer odd counts
//  e.g. ccacacc, c has a count of 5
// note to self: didn't think about the possibility of not using all letters -- therefore when a letter withn odd count is seen that is longer than the current longest odd char count, add the previous odd char count - 1 to the palindrome length.

const longestPalindrome = (string) => {

  var charCount = {};

  string.split('').forEach((char) => {
    !charCount[char] ? charCount[char] = 1 : charCount[char]++;
  });

  var palindromeLength = 0;
  var longestOdd = 0;

  for (char in charCount) {
    let count = charCount[char];
    if (count % 2 === 0) {
      palindromeLength += count;
    } else {
      if (count > longestOdd) {
        if (longestOdd !== 0) {
          palindromeLength += (longestOdd - 1);
        }
        longestOdd = count;
      } else {
        palindromeLength += (count - 1);
      }
    }
  }

  palindromeLength += longestOdd;

  return palindromeLength;

};