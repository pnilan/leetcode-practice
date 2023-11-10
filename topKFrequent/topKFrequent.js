/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * IOCE
 * Input: array of numbers, nums; integer k
 * Output: array of k most frequent elements
 * Constraints: n/a
 * Edge Cases: n/a
 * Guaranteed to be unique answer
 *
 * Strategy:
 * iterate over array, keep count in object
 * iterate through object, add to result array if count higher than min
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {

  let result = [];
  let counts = {};

  for (let num of nums) {
    counts[num] = counts[num] + 1 || 1;
  }

  for (let num in counts) {
    result[counts[num]] = result[counts[num]] === undefined ? [num] : [ ...result[counts[num]], num ];
  }

  result = result.flat();
  let returningArray = [];

  console.log(result);

  for (let i = result.length - 1; i >= 0; i--) {
    returningArray.push(result[i]);
    if (returningArray.length === k) {
      return returningArray;
    }
  }
};

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

console.log(topKFrequent(nums, k));