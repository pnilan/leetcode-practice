/**
 * https://leetcode.com/problems/search-insert-position/
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * IOCE
 * Input: array of sorted numbers, target value
 * Output: index of where number is located within array of index of where it would be located
 * Constraints: O(log n)
 * Edge Cases: n/a
 *
 * Strategy
 * Binary Search => sorted array, therefore should identif min, mid, and max indices
 * If target is greater than nums[mid] then set min to mid + 1, max stays same, and then calc new mid
 * If target is less than nums[mid], then min stays the same, max becomes mid, and then calc new mid
 * need to check if target is greater than nums[max]
 * also need to check if target is less tha nums[min]
 * additionally need to track indices
 *
 * Psuedocode
 *
 * if length of nums is = 1, determine if target is equal to nums or greater than or less then,
 * then return index
 *
 * if length of nums is = 2, determine if target is greater than nums[max] or less than nums[min]
 * if greater than nums[max] => return length
 * if less than or equal to nums[min] => return 0
 * if between min and max, then return 1
 *
 * iterate over while loop is true
 * calculate mid
 * if target is equal to nums[mid] => return mid
 * if target is greater than nums[mid] and less than or equal to nums[max] => set new min
 * if target is less than nums[mid] and greater than or equalt to nums[min] => set new max
 *
 */

const searchInsert = (nums, target) => {

  let min = 0;
  let max = nums.length - 1;

  while (true) {
    let mid = Math.floor((max - min) / 2) + min;
    if (target <= nums[min]) { return min; }
    if (target === nums[max]) { return max; }
    if (target > nums[max]) { return max + 1; }
    if (target === nums[mid]) { return mid; }

    if (target >= nums[mid]) {
      min = mid + 1;
    } else if (target <= nums[mid]) {
      max = mid;
    }
  }
};

// Example 1
let input = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(input, target), 'should be 2');

// Example 2
target = 2;
console.log(searchInsert(input, target), 'should be 1');

// Example 3
target = 7;
console.log(searchInsert(input, target), 'should be 4');