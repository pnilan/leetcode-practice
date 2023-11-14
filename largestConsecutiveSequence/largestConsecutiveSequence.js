/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive sequence.
 *
 * Must be O(n) time
 *
 * IOCE:
 * Inputs: Array of integers, nums
 * Outpit: Array of integers
 * Constraints: O(n) time
 * Edge Cases: account for duplicates? negative values
 *
 * Strategy
 * iterate through array, track
 *
 * return longest
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 */

const longestConsecutive = (nums) => {

  let longestSequence = 0;
  let currentCount = 0;
  let set = new Set(nums);

  for (let num of set) {
    if (!set.has(num - 1)) {
      currentCount = 1;
      while (set.has(num + currentCount)) {
        currentCount++;
      }
      longestSequence = Math.max(currentCount, longestSequence);
    }
  }

  return longestSequence;
};

let nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums), 'should be 4');

nums = [0,3,7,2,5,8,4,6,0,1];
console.log(longestConsecutive(nums), 'should be 9');

