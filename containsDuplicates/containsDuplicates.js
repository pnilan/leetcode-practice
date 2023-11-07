/**
 * IOCE
 * Input: array of numbers
 * Output: boolean
 * Constraints: n/a
 * Edge Cases: TBD
 *
 * Strategy
 * Create an object to track counts, if already exists in object, return true
 *
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicates = (nums) => {

  const counts = {};

  for (let num of nums) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      return true;
    }
  }

  return false;

};

const containsDuplicatesSorted = (nums) => {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) { return true; }
  }

  return false;
};

const containsDuplicatesSet = (nums) => {
  const s = new Set();

  for (let n of nums) {
    if (s.has(n)) {
      return true;
    }

    s.add(n);
  }

  return false;
};

let input1 = [1,2,3,1];
console.log(containsDuplicatesSet(input1), 'should be true');

let input2 = [1,2,3,4];
console.log(containsDuplicatesSet(input2), 'should be false');

let input3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicatesSet(input3), 'shoulde be true');