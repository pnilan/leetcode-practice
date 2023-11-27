/**
 * Given a 1-indexed array of interegers, numbers that is already sorted in a non-decreasing order, find two numbers such that they add up to a specific target number
 *
 * Return the indices of the two numbers index1 and index2 added by one as an integer array [index1, index2]
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * IOCE
 * Input: Array of integers, numbers; integer, target
 * Output: array of integers
 * Constraints: may not use the same element twice
 * Edge Cases: n/a
 *
 * Strategy:
 * two pointers
 *
 * left index and right index
 * the input array is sorted in a non-decreasing order, meaning that once the sum numbers[left] + numbers[right] exceeds the target, the target indices should have been found.
 *
 * Note that the input array if 1-indexed, meaning that the indices that are returned should assume that the first index is 1, not zero.
 *
 * @param {numbers[]} numbers
 * @param {number} target
 * @returns {numbers[]}
 */

const twoSum = (numbers, target) => {

  let left = 0;
  let right = numbers.length - 1;

  while (true) {
    let current = numbers[left] + numbers[right];

    if (current === target) {
      return [left + 1, right + 1];
    }

    if (current < target) {
      left++;
    }

    if (current > target) {
      right--;
    }
  }
};

let array1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(array1, target1), 'should be [1, 2]');

let array2 = [2, 3, 4];
let target2 = 6;
console.log(twoSum(array2, target2), 'should be [1, 3]');

let array3 = [3, 3];
let target3 = 6;
console.log(twoSum(array3, target3), 'should be [1, 2]');

let array4 = [-1, 0];
let target4 = -1;
console.log(twoSum(array4, target4), 'should be [1, 2]');