/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where sum of elements equals zero.
 *
 * IOCE:
 * Input: array of integers, nums
 * Output: array of arrays of integers
 * Constraints: cannot have multiple of same element in resulting array
 * Edge Cases: If no solution, return null (not explicit in prompt)
 *
 * Strategy:
 * Two pointer strategy
 *
 * Should be one "anchor" value (i). Iterate over array, for each iteration, set a new left and right index, find indices where elements sum to zero.
 *
 * Space complexity: 0(n)
 * Time complexity: 0(n^2)
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */

const threeSum = (nums) => {

  let result = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length - 1; i++) {

    if (nums[i] > 0) {
      break;
    } else if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
        continue;
      } else if (sum > 0) {
        right--;
        continue;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let expected = [[-1, -1, 2], [-1, 0, 1]];
let actual = threeSum(nums);
console.log(`Expected: ${JSON.stringify(expected)}. Actual: ${JSON.stringify(actual)}`);

nums = [0, 1, 1];
expected = [];
actual = threeSum(nums);
console.log(`Expected: ${JSON.stringify(expected)}. Actual: ${JSON.stringify(actual)}`);

nums = [0, 0, 0];
expected = [[0, 0, 0]];
actual = threeSum(nums);
console.log(`Expected: ${JSON.stringify(expected)}. Actual: ${JSON.stringify(actual)}`);