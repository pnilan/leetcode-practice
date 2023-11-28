/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining
 *
 * IOCE:
 * Input: array of integers, height
 * Output: total vol of water that can be captured
 * Constraints: n/a
 * Edge Case: if all zero, return zero
 *
 * Strategy:
 * Two pointers + stack?
 *
 * set left pointer as zero, set right pointer as left + 1
 *
 * water can only accumulate if height[right] < height[left] and height[right + x] >= height[left]
 *
 * Cases:
 * left is equal or less than right, pop stack and cal water for that section of area
 * left is greater than right, therefore increment right
 *
 *
 *
 * @param {number[]} height
 * @returns {number}
 */

const trap = (height) => {

  let totalWater = 0;
  let stack = [];
  let left = 0;
  let right = left + 1;


  while (right < height.length) {
    if (height[left] > height[right]) {
      stack.push(height[right]);
      right++;
      if (right === height.length) {
        height[left] = Math.max(...stack);
        right = left + 1;
        stack = [];
      }
    } else {
      while (stack.length) {
        let prevHeight = stack.pop();
        totalWater += (Math.min(height[left], height[right]) - prevHeight);
      }
      left = right;
      right++;
    }
  }
  return totalWater;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let expected = 6;
let actual = trap(height);
console.log(`Expected: ${expected},  actual: ${actual}. Correct? ${expected === actual}`);

height = [4, 2, 0, 3, 2, 5];
expected = 9;
actual = trap(height);
console.log(`Expected: ${expected}, actual: ${actual}. Correct? ${expected === actual}`);

height = [4, 2, 3];
expected = 1;
actual = trap(height);
console.log(`Expected: ${expected}, actual: ${actual}. Correct? ${expected === actual}`);