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
 * min K = 1
 * max K = Math.max(...piles)
 * mid = Math.floor((max + min) / 2)
 *
 *
 * @param {number[]} piles
 * @param {number} h
 * @returns {number}
 */

const minEatingSpeed = (piles, h) => {

  let low = 1;
  let high = Math.max(...piles);

  while (low < high) {

    const mid = (low + high) >> 1;

    let hoursPassed = 0;

    for (let i = 0; i < piles.length; i++) {
      hoursPassed += Math.ceil(piles[i] / mid);
    }

    if (hoursPassed > h) {
      low = mid + 1;
    }

    if (hoursPassed <= h) {
      high = mid;
    }
  }

  return high;
};

let piles = [3, 6, 7, 11];
let h = 8;
let expected = 4;
let actual = minEatingSpeed(piles, h);
console.log(`Expected: ${expected}. Actual: ${actual}. Correct answer? ${expected === actual}`);

piles = [30, 11, 23, 4, 20];
h = 5;
expected = 30;
actual = minEatingSpeed(piles, h);
console.log(`Expected: ${expected}. Actual: ${actual}. Correct answer? ${expected === actual}`);

piles = [30, 11, 23, 4, 20];
h = 6;
expected = 23;
actual = minEatingSpeed(piles, h);
console.log(`Expected: ${expected}. Actual: ${actual}. Correct answer? ${expected === actual}`);