// https://leetcode.com/problems/climbing-stairs/

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2

Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3

Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
*/

// 1. IOCE
// Input: integer (n steps)
// Output: integer (# of permutations)
// Constraints: n/a
// Edge Cases: n/a
// 2. Strategy
// Recursive?
// base case n <== 0
// return 0
//
// if n === 1 return 1
//
// if n === 2 return 2
//
// else return climbStairs (n - 1) + climbStair (n - 2)

// Recursive strategy worked but took too long for LeetCode (time limit exceeded)
// in order to reduce the number of calculations that occur, you need to recognize
// that climbStairs(n) is always equal to climbStairs(n - 1) + climbStairs(n - 2)
// therefore should save the results in an array and just progressively push the sums
// to the array, return array[n - 1] at end for result:
const climbStairs = (n) => {

  var memoized = [];

  for (var i = 1; i <= n; i++) {
    if (i <= 2) {
      memoized.push(i);
    } else {
      memoized.push(memoized[i - 2] + memoized[i - 3]);
    }
  }

  return memoized[n - 1];
};


// recursive solution:
const climbStairsRecursively = (n) => {

  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return climbStairsRecursively(n - 1) + climbStairsRecursively(n - 2);
  }
};

console.log(climbStairs(45)); // => 1836311903
console.log(climbStairsRecursively(45)); // => 1836311903
