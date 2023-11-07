/**
 * IOCE
 * Input: two strings, s and t
 * Output: boolean
 * Contraints: n/a
 * Edge Cases: n/a
 *
 * Strategy
 * check length,
 * sort words
 * iterate through words and compare values
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) { return false; }

  s = s.split('').sort();
  t = t.split('').sort();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) { return false; }
  }

  return true;
};

let s1 = 'anagram';
let t1 = 'nagaram';
console.log(isAnagram(s1, t1), 'should be true');

let s2 = 'rat';
let t2 = 'car';
console.log(isAnagram(s2, t2), 'should be false');