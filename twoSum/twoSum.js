/**
 * IOCE
 * Input: array of integers, target value
 * Output: array containing integers of numbers that in array that, when added, equal the target value
 * Constraints: n/a
 * Edge Cases: n/a
 *
 * Can assume there is only one solution
 *
 * Strategy:
 * Iterate through the array twice, from 0 to length - 2, and from i to length -1
 * add values together, if equal to target, return i, j
 *
 * @param {numbers[]} nums
 * @param {number} target
 * @return {numbers[]}
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
};

const twoSumObj = (nums, target) => {

  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashmap[target - nums[i]] === undefined) {
      hashmap[nums[i]] = i;
    } else {
      return [hashmap[target - nums[i]], i];
    }
  }
};

let array1 = [2,7,11,15];
let target1 = 9;
console.log(twoSum(array1, target1), 'should be [0, 1]');

let array2 = [3,2,4];
let target2 = 6;
console.log(twoSum(array2, target2), 'should be [1, 2]');

let array3 = [3,3];
let target3 = 6;
console.log(twoSum(array3, target3), 'should be [0,1]');

console.log(twoSumObj(array1, target1), 'should be [0, 1]');
console.log(twoSumObj(array2, target2), 'should be [1, 2]');
console.log(twoSumObj(array3, target3), 'should be [0, 1]');