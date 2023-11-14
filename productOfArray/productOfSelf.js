/**
 * return an array where each element is the product of all other elements of the input array
 *
 * IOCE
 * Input: array of integers
 * Output: array of integers
 * Constraints: O(n)
 * Edge Cases: n/a
 *
 * Strategy:
 * calculate the product of all numbers before each index
 * calculate the product of all numbers after each index
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = (nums) => {
  let result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }

  return result;
};