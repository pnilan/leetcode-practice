/**
 * IOCE
 * Input: array of numbers, integer k
 * Ouput: array of numbers
 * Constraints: n/a
 * Edge Cases: n/a
 *
 * Strategy
 *
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {

  let counts = {};
  let countsArray = [];
  let results = [];

  for (let num of nums) {
    counts[num] = !counts[num] ? 1 : counts[num] + 1;
  }

  for (let num in counts) {
    if (!countsArray[counts[num]]) {
      countsArray[counts[num]] = [num];
    } else {
      countsArray[counts[num]] = [...countsArray[counts[num]], num];
    }
  }

  countsArray = countsArray.flat();

  for (let i = countsArray.length - 1; i >= 0; i--) {
    if (results.length === k) {
      break;
    } else {
      results.push(countsArray[i]);
    }
  }

  return results;
};

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums, k));

nums = [1];
k = 1;
console.log(topKFrequent(nums, k));
