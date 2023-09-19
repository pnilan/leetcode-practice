/**
 * IOCE
 * Input: array of numbers
 * Output: number
 * Constraints: n/a
 * Edge Cases: n/a
 *
 * Strategy
 * Dynamic Programming
 * track max profit
 * left and right pointer
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {

  let profit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[right] - prices[left] > profit) {
      profit = prices[right] - prices[left];
    } else if (prices[right] - prices[left] < 0) {
      left = right;
    }
    right++;
  }

  return profit;

};