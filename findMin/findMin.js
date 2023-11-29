/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0, 1, 2, 3, 4, 5, 6, 7] might become:
 *
 * [4, 5, 6, 7, 0, 1, 2, 3] if it was rotated 4 times, or
 * [0, 1, 2, 3, 4, 5, 6, 7] if it was rotated 7 times
 *
 * Notice that rotating an array [a[0], a[1], a[2], ... a[n-1]] 1 time results in the array:
 * [a[n-1], a[0], ..., a[n-2]]
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * Max time complexity: O(log n)
 *
 * IOCE:
 * Input: array of numbers, nums
 * Output: number
 * Constraints: O(log n) time complexity
 * Edge Cases: n/a
 *
 * Strategy:
 * Binary Search
 *
 * [0, 1, 2, 3]
 * [3, 0, 1, 2]
 * [2, 3, 0, 1]
 * [1, 2, 3, 0]
 *
 * compare mid high low values for each iteration?
 *
 * @param {number[]} nums
 * @returns {number}
 */

const findMin = (nums) => {

  let low = nums[0];
  let high = nums[nums.length - 1];
  mid = (low + high) >> 1;

  while (low > mid || high < mid) {
    nums.unshift(nums.pop());

    low = nums[0];
    high = nums[nums.length - 1];
    mid = (low + high) >> 1;
  }

  return low;

};

let nums = [3, 4, 5, 1, 2];
let expected = 1;
let actual = findMin(nums);
console.log(`Expected: ${expected}. Actual: ${actual}. Correct answer? ${expected === actual}`);

nums = [4, 5, 6, 7, 0, 1, 2];
expected = 0;
actual = findMin(nums);
console.log(`Expected: ${expected}. Actual: ${actual}. Correct answer? ${expected === actual}`);

nums = [11, 13, 15, 17];
expected = 11;
actual = findMin(nums);
console.log(`Expected: ${expected}. Actual: ${actual}. Correct answer? ${expected === actual}`);