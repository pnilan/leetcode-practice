/**
 * IOCE
 * Input: array of numbers
 * Output: integer
 * Constraints: n/a
 * Edge Cases: n/a
 *
 * Strategy
 * iterate through array, convert value to string, count length, if count is even increment counter
 * return counter
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const findNumbers = (nums) => {
  let count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }

  return count;
};