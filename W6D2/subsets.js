/**
 * IOCE
 * Input: array of numbers
 * Output: array of arrays (all possible subsets)
 * Constraints: should not contain duplicates
 * Edge Cases: n/a
 *
 * Strategy
 * create result array
 * breadth first
 * iterate over nums array
 *
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsets = (nums) => {

  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const size = result.length;
    for (j = 0; j < size; j++) {
      result.push([...result[j], nums[i]]);
    }
  }

  return result;

};