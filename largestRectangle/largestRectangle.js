/**
 * Given an array of integers, heights, representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle of the histogram.
 *
 * IOCE
 * Input: array of integers, heights
 * Output: number, largest area
 * Constraints: n/a
 * Edge Cases: height of zero
 *
 * Strategy:
 *
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = (heights) => {

  let stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      let [stackIdx, stackHeight] = stack.pop();
      let currentHeight = stackHeight * (i - stackIdx);
      maxArea = Math.max(maxArea, currentHeight);
      start = stackIdx;
    }
    stack.push([start, heights[i]]);
  }

  for (let height of stack) {
    console.log(height);
    maxArea = Math.max(maxArea, height[1] * (heights.length - height[0]));
  }

  return maxArea;
};

let heights = [2, 1, 5, 6, 2, 3];
let expected = 10;
let actual = largestRectangleArea(heights);
console.log(`Expected ${expected}, actual is ${actual}. Correct answer? ${expected === actual}`);

heights = [2, 4];
expected = 4;
actual = largestRectangleArea(heights);
console.log(`Expected ${expected}, actual is ${actual}. Correct answer? ${expected === actual}`);

heights = [2, 1, 2];
expected = 3;
actual = largestRectangleArea(heights);
console.log(`Expected ${expected}, actual is ${actual}. Correct answer? ${expected === actual}`);