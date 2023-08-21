// https://leetcode.com/problems/majority-element/

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// 1. IOCE
// Input: array of integers
// Output: integer
// Constraints: 0(n) time, 0(1) space
// Edge Cases: n/a (majority elementy is guaranteed to exist)
//
// 2. Strategy
// iterate though array, track count in object, also track element with highest count in separate variable

const majorityElement = (array) => {

  var count = {};
  var max = null;

  array.forEach((element) => {
    !count[element] ? count[element] = 1 : count[element]++;
    if (!max) {
      max = element;
    } else {
      max = count[element] > count[max] ? element : max;
    }
  });

  return max;
};

// Boyer-Moore Majority Vote Algorithm solution:

const majorityElementAlgo = (array) => {

  var majorityElement;
  var count = 0;

  array.forEach((el) => {

    if (count === 0) {
      majorityElement = el;
    }

    el === majorityElement ? count++ : count--;

  });

  return majorityElement;

};