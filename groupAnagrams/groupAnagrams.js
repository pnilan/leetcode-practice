/**
 * Given an array of strings strs group the anagrams together. You can return the answer in any order.
 *
 * IOCE
 * Input: Array of strings, strs
 * Output: array of array of strings
 * Constraints: n/a
 * Edge Cases: empty strings possible, anagrams of other empty strings
 * Duplicate strings?
 *
 * Strategy
 * create a groupedAnagrams array
 * create a sortedStrs obj
 * iterate over strs input array, sort letters in each string and create property of sortedStrs as sorted string, value equal to array, push str to its respective sorted string key
 *
 * iterate over sortedStrs obj and push to groupedAnagrams
 *
 * return groupedAnagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs) => {

  const sortedStrs = {};
  const groupedAnagrams = [];

  for (let str of strs) {
    let tempSort = str.split('').sort().join('');

    if (!sortedStrs[tempSort]) {
      sortedStrs[tempSort] = [str];
    } else {
      sortedStrs[tempSort].push(str);
    }
  }

  for (let key in sortedStrs) {
    groupedAnagrams.push(sortedStrs[key]);
  }

  return groupedAnagrams;
};

let i1 = ["eat","tea","tan","ate","nat","bat"];
let o1 = [["bat"],["nat","tan"],["ate","eat","tea"]];

console.log(groupAnagrams(i1), 'should be', o1);