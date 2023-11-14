/**
 * Return an array answer such that answer[i] is equal to the product of all elements of nums except for num[i]
 *
 * IOCE
 * Input: array of integers, nums
 * Output: array of numbers
 * Constraints: O(n) w/o division operator
 * Edge Cases: n/a
 *
 * Strategy
 * O(n^2)
 *
 * iterate over input array, create product variable
 * iterate over input array, if j === i, continue, all other steps should multiply result[i]
 *
 * return result array
 *
 * Strategy O(n)
 *
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = (nums) => {

  const result = [];
  let prefix = 1;
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    post *= nums[i + 1];
    result[i] *= post;
  }

  return result;

};


let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums), 'should be [24, 12, 8, 6]');

nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums), 'should be [0, 0, 9, 0 ,0]');