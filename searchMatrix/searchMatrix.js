/**
 *
 * You are given an m x n integer matrix, matrix with the following two properties:
 *  each row is sorted in a non-decreasing order
 *  first integer of each row is greater than the last integer of the previous row
 * Given an integer, target, return true if target is in matrix of false otherwise
 *
 * You must write the solution in O(log(m * n))
 *
 * IOCE
 * Input: Matrix (array of array of integers)
 * Output: boolean
 * Constraints: O(log(m * n)) time complexity
 * Edge Cases: TBD
 *
 * Strategy
 * Binary search
 *
 * check if target is <= matrix[0][n], if yes,
 *
 * perform binary search on subarray,
 *
 * else, check matrix[1][n]
 *
 * @param {number[]} matrix
 * @param {number} target
 * @returns {boolean}
 */

const searchMatrix = (matrix, target) => {

  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    if (target <= matrix[row][cols - 1]) {
      return search(matrix[row], target);
    }
  }

  return false;
};

const search = (numbers, target) => {

  if (numbers.length === 1 && target === numbers[0]) { return true; }

  let low = 0;
  let high = numbers.length;
  let mid = Math.floor(high / 2);

  while (low <= high) {

    if (target === numbers[mid]) {
      return true;
    }

    if (target > numbers[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    mid = Math.floor((high - low) / 2) + low;
  }

  return false;

};