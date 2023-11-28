/**
 * Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line and (i,  0) and (i, height[i])
 *
 * Find the two lines that together, with the x-axis form a container, such that the container contains the most water
 *
 * return the maximum amount of water that the container can store
 *
 * IOCE:
 * Input: array of integers, height
 * Output: number, max vol of water
 * Constraints: if all values are zero, then return zero
 * Edge Cases: n/a
 *
 * Strategy:
 * Two pointers -- left and right index
 * set left index to zero, set right index  to length of array minus one
 * while left is less than right
 *  set the max area of water given current indices
 *
 *  if height[left + 1] > height[left] then increment left, otherwise decrement right
 *
 * return maxarea
 *
 * @param {number[]} height
 * @returns {number}
 */

const maxArea = (height) => {

  let maxVol = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxVol = Math.max(maxVol, (right - left) * Math.min(height[left], height[right]));

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxVol;

};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let expected = 49;
let actual = maxArea(height);
console.log(`Expected: ${expected}, actual: ${actual}. Correct answer? ${expected === actual}`);

height = [1, 1];
expected = 1;
actual = maxArea(height);
console.log(`Expected: ${expected}, actual: ${actual}. Correct answer? ${expected === actual}`);