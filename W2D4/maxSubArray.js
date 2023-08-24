// https://leetcode.com/problems/maximum-subarray/

/*
Given an integer array nums, find the
subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
*/

// 1. IOCE
// Inputs: array of integers
// Output: integer
// Constraints: n/a
// Edge Cases: all negative --> least negative value
//
// 2. Strategy
// accumulate
//
//

const maxSubArray = (nums) => {

  var max = nums[0];
  var tempSum = 0;

  for (var i = 0; i < nums.length; i++) {
    tempSum += nums[i];

    if (tempSum > max) {
      max = tempSum;
    }

    if (tempSum < 0) {
      tempSum = 0;
    }
  }

  return max;

};
