// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// IOCE
// INPUT: array of integers, target integer
// OUTPUT: indices of the two numbers in the array that equal the target value
// CONSTRAINTS: n/a
// EDGE CASES: n/a (guaranteed a solution)
//
// STRATEGY
// Iterate over the array
// set array[i] as first number, then iterate over remaining values in array and
// add array[j] with array[i], if target value
// raturn i and j

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
};
