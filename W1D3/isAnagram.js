// https://leetcode.com/problems/valid-anagram/

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
*/

// 1. IOCE
// INPUT: s, t => strings consisting of only lowercase letters
// OUTPUT: boolean
// CONSTRIANTS: n/a
// EDGE CASES: none?
//
// 2. STRATEGY
// High time complexity approach 0(n*n):
// if not same length, return false
// iterate over s
//  if s[i] is in t, then remove character from t (slice)
//  else return false
//
// if t.length !== 0 return false, else true

const isAnagramHigh = (s, t) => {
  if (s.length !== t.length) { return false; }

  for (var i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      let index = t.indexOf(s[i]);
      t = t.slice(0, index) + t.slice(index + 1);
    } else {
      return false;
    }
  }

  return t.length === 0;
};

// Lower time complexity appraoch 0(n)
// track count of characters in object, chars in s ++ , chars in t--

const isAnagramLow = (s, t) => {
  if (s.length !== t.length) { return false; }

  var count = {};

  for (var i = 0; i < s.length; i++) {
    count[s[i]] === undefined ? count[s[i]] = 1 : count[s[i]]++;
    count[t[i]] === undefined ? count[t[i]] = -1 : count[t[i]]--;
  }

  for (var k in count) {
    if (count[k] !== 0) {
      return false;
    }
  }

  return true;
};