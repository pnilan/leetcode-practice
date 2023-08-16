// https://leetcode.com/problems/binary-search/

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.
*/

// 1. IOCE
// INPUT: array of integers (nums), target integer (target)
// OUTPUT: integer (index of target number or -1)
// CONSTRAINTS: n/a
// EDGE CASES: does not exists => -1
//
// 2. STRATEGY
// halve/halve/halve again
// if in upper half, add midpoint + 1 to indexOfTarget
// if in lower half, don't add to indexOfTarget

const binarySearch = (nums, target) => {
  var indexOfTarget = 0;

  while (true) {
    var mid = Math.floor((nums.length - 1) / 2);
    if (nums[mid] === target) {
      indexOfTarget += mid;
      return indexOfTarget;
    } else if (target > nums[mid]) {
      indexOfTarget += mid + 1;
      nums = nums.slice(mid + 1, nums.length);
    } else if (target < nums[mid]) {
      nums = nums.slice(0, mid);
    } else {
      return -1;
    }
  }
};