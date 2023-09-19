/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = sum += nums[i];
  }
  return nums;
};