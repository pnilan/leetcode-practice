
// IOCE
// Input: array of numbers
// Output: array of array of numbers
// Constraints: no duplicates
// Edge Cases: no number sum to zero => []

/**
 * Strategy
 * sort nums in ascending order
 * set a left, middle, and right index
 * iterate through array from 0 to length - 2
 * within the iteration, update j and k to find all possibilities where j < k
 * for a given i where sum of three elements equals 0
 * if nums[i] === nums[i + 1] then increment i to avoid duplicates
 * in order to avoid duplicates, increment j and decrement k if subsequent values
 * are same
*/

/**
 * @param {numbers[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {

  const results = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {

    let j = i + 1;
    let k = nums.length - 1;

    while (nums[i] === nums[i + 1]) {
      i++;
    }

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
};

