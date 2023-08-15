// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

// 1. IOCE
// INPUT: array of prices (integers)
// OUTPUT: integer (maximum profit)
// CONSTRAINTS: at least one price element in array, up to 10^5, prices range from zero to 10^4
// EDGE CASES: no profit => return 0
// 2. STRATEGY
// O(nxn) (Fails leetcode due to time complexity)
// iterate through array
// for each element at index i, calc profit => max of array.slice(i) - array[i], if greater than previous max, update max
//
// double pointer approach:
// set left pointer to index 0, right pointer to index n - 1
// if prices[right] - prices[left] < 0, move left pointer
// if prices[right] - prices[left] > 0, move right pointer and check against current profit
//

// High time complexity solution:
// const maxPrices = (prices) => {

//   var profit = 0;

//   if (prices.length <= 1) {
//     return profit;
//   }

//   for (var i = 0; i < prices.length; i++) {
//     let tempProfit = Math.max(...prices.slice(i)) - prices[i];
//     if (tempProfit > profit) {
//       profit = tempProfit;
//     }
//   }

//   return profit;

// };

// Double pointer approach:
const maxPrices = (prices) => {

  var profit = 0;
  var rightPointer = 1;
  var leftPointer = 0;

  while (rightPointer < prices.length) {
    let tempProfit = prices[rightPointer] - prices[leftPointer];
    if (prices[leftPointer] < prices[rightPointer]) {
      profit = tempProfit > profit ? tempProfit : profit;
    } else {
      leftPointer = rightPointer;
    }
    rightPointer++;
  }

  return profit;

};