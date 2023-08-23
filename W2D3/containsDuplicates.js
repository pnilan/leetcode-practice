// https://leetcode.com/problems/contains-duplicate/

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*/

// 1. IOCE
// Input: array of integers
// Output: boolean
// Constraints: n/a
// Edge Cases: n/a
//
// 2. Strategy
// create object that tracks frequency
// if object doesn't have a key of the current element
// create
// if it doesn, return true
// after loop, return false

const containsDuplicate = (nums) => {

  var counts = {};

  for (var i = 0; i < nums.length; i++) {
    if (counts[nums[i]] === undefined) {
      countrs[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;

};