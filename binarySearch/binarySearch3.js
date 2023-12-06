/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists reutnr its index otherwise return -1
 *
 * IOCE
 * Input: array of numbers, nums
 * Output: integer
 * Constraints: max time complexity of O(log n)
 * Edge cases: If doesn't exist, return -1
 *
 * Strategy:
 * BST
 *
 * mid pointer, high pointer, low pointer
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

const search = (nums, target) => {

  if (target === nums[0]) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;

    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    }

    if (target > nums[mid]) {
      left = mid + 1;
    }
  }

  return -1;

};

