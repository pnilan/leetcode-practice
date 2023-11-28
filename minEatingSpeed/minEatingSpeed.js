/**
 * There are n piles of bananas, the ith pile has piles[i] bananas.
 *
 * Banana guards gone for h hours
 *
 * Each hour, Koko can choose some pile of bananas and eat k bananas from the pile, if the pile has less than k bananas, Koko will eat all of them instead and not eat any more bananas during this hour.
 *
 * Koko likes to eat slowly but wants to finish eating all the bananas before the banana guards return
 *
 * Return the min integer k such that she can eat all the bananas with h hours.
 *
 * IOCE
 * Input: array of integers, piles; integer, h
 * Output: integer
 * Constraints: n/a
 * Edge Cases: Cannot eat all piles in allocated time? => null, does not specify in prompt
 *
 * Strategy:
 * Consider binary search?
 *
 * Goal: return the minimum bananas per hour Koko can eat while still eating all bananas before h hours elapses
 *
 *
 * @param {number[]} piles
 * @param {number} h
 * @returns {number}
 */

const minEatingSpeed = (piles, h) => {

  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = (left + right) >> 1;
    const hourSpent = getHoursSpent(mid, piles);
    if (h < hourSpent) {
      left = mid + 1;
    }
    if (h >= hourSpent) {
      right = mid;
    }
  }
  return right;
};

const getHoursSpent = (mid, piles, hourspent = 0) => {
  for (const pile of piles) {
    hourspent += Math.ceil(pile / mid);
  }
  return hourspent;
};