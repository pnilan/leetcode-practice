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
 * A rectangle can only extend right if the rectangle to its right is same height or higher, therefore, if a "rectangle" is shorter than the previous rectangle, you can calculate the area of the previous rectangle and pop from stack
 *
 *
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = (heights) => {

  let maxArea = 0;
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && heights[i] < stack[stack.length - 1][1]) {
      let prevRect = stack.pop();
      maxArea = Math.max(maxArea, (i - prevRect[0]) * prevRect[1]);
      start = prevRect[0];
    }

    stack.push([start, heights[i]]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    maxArea = Math.max(maxArea, (heights.length - stack[i][0]) * stack[i][1]);
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

