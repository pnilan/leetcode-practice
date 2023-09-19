/**
 * IOCE
 * Input: array of numbers
 * Output: array of numbers
 * Constraints: n/a
 * Edge Cases: n/a
 *
 * Strategy
 * create an object to track count of values less than object key
 * create new array to track final counts
 * Iterate through the the array
 * create key in object if doesn't exist and set to zero
 * then iterate through array again and compare each individual value to current value, increment count in obj
 * push to new array
 * if current value already exists in object then skip to next value in array, push count to new array
 * return result array
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {

  let counts = {};
  let countsArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) {
      counts[nums[i]] = 0;

      for (let j = 0; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          counts[nums[i]]++;
        }
      }
    }

    countsArray.push(counts[nums[i]]);
  }

  return countsArray;

};