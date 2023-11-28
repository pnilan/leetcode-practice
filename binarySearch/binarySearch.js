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

  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(high / 2);

  while (low <= high) {

    if (target === nums[mid]) {
      return mid;
    }

    if (target > nums[mid]) {
      low = mid + 1;
      mid = Math.floor((high - low) / 2) + low;
    } else {
      high = mid - 1;
      mid = Math.floor((high - low) / 2) + low;
    }
  }


  return -1;
};