// https://leetcode.com/problems/ransom-note/

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.
*/

// 1. IOCE
// Input: two strings (ransomNote, magazine)
// Output: boolean
// Constraints: each letter in magazine can only be used once
// Edge Cases: n/a
// 2. Strategy
// Not all letters in magazine need to be used
// To reduce the number of times we iterate through magazine, would recommend iterating through magazine once FIRST and add to object, then iterate through ransomNote and check if object contains the letter, and reduce the count of the letter in the object
//

const canConstruct = (ransomNote, magazine) => {

  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  var magazineLettersCount = {};
  var result = true;

  magazine.forEach((letter) => {
    !!magazineLettersCount[letter] ? magazineLettersCount[letter]++ : magazineLettersCount[letter] = 1;
  });

  ransomNote.forEach((letter) => {
    if (!!magazineLettersCount[letter] && result) {
      magazineLettersCount[letter]--;
    } else {
      result = false;
    }
  });

  return result;

};