/**
 * There is an integer array nums sorted in ascending order with distinct values.
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], ..., nums[k-1]]
 *
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums
 *
 * Time Complexity O(log n) or better
 *
 * IOCE
 * Input: array of sorted numbers, nums; number, target
 * Output: number
 * Constraints: O(log n) time complexity
 * Edge Cases: Array length of 1 => check value or return -1
 *
 * Strategy
 * Binary search --> rotate and then binary search
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

const search = (nums, target) => {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;

    let check = nums[mid];

    let leftNum = nums[left];
    let rightNum = nums[right];

    if (check === target) {
      return mid;
    }

    const isAscending = leftNum <= check;
    if (isAscending) {
      const isInRange = leftNum <= target;
      const isLess = target < check;

      const isTargetGreater = !(isInRange && isLess);
      if (isTargetGreater) { left = mid + 1; }

      const isTargetLess = isInRange && isLess;
      if (isTargetLess) { right = mid - 1; }
    }

    const isDescending = check < leftNum;
    if (isDescending) {
      const isGreater = check < target;
      const isInRange = target <= rightNum;

      const isTargetGreater = isGreater && isInRange;
      if (isTargetGreater) { left = mid + 1; }

      const isTargetLess = !(isGreater && isInRange);
      if (isTargetLess) { right = mid - 1; }
    }
  }

  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
let expected = 4;
let actual = search(nums, target);
console.log(`Expected: ${expected}. Actual ${actual}. Correct answer? ${expected === actual}`);

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
expected = -1;
actual = search(nums, target);
console.log(`Expected: ${expected}. Actual ${actual}. Correct answer? ${expected === actual}`);

nums = [1];
target = 0;
expected = -1;
actual = search(nums, target);
console.log(`Expected: ${expected}. Actual ${actual}. Correct answer? ${expected === actual}`);