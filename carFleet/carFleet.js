/**
 * There are n cars going to the same destination along a one-lane road. The destination is target miles away.
 *
 * You are given two integer array position and speed, both of length n, where the position[i] is position of the ith car and speed[i] is the speed of the ith car (in mph)
 *
 * a car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. the distance between these two cars is ignored (i.e. assume they have the same position)
 *
 * A car fleet is some non-empty set of cars driving at the same position and same speed. note that a single car is also a car fleet.
 *
 * Retun the number of car feleets that will arrive at the destination
 *
 * IOCE
 * Input: array of integers, position; array of integers, speed; integer, target;
 * Output: integer
 * Constraints: cars can never pass cars ahead, they bottlneck together
 * Edge Cases: n/a
 *
 * Strategy
 * The goal is to determine the number of groups of cars that arrive at the destination at the same time.
 * Each increment forward will be "one hour", in other words, the cars will closer to the destination based on their speed, which is in mph.
 *
 * stack might be the sorted order of the cars' positions? Since a car cannot pass a car in front of it, the order will always stay the same.
 *
 *
 *
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

const carFleet = (target, position, speed) => {
  position = position.map((position, index) => {
    return [position, speed[index]];
  });

  position.sort((a, b) => {
    return a[0] - b[0];
  });

  position = position.map(([position, speed]) => {
    return (target - position) / speed;
  });

  let stack = [];

  for (const time of position) {
    while (stack.length && stack[stack.length - 1] <= time) {
      stack.pop();
    }
    stack.push(time);
  }

  return stack.length;
};

let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];
let expected = 3;
let actual = carFleet(target, position, speed);
console.log(`Expected: ${expected}, actual is ${actual}. Answer is correct: ${expected === actual}!`);

target = 10;
position = [3];
speed = [3];
expected = 1;
actual = carFleet(target, position, speed);
console.log(`Expected: ${expected}, actual is ${actual}. Answer is correct: ${expected === actual}!`);

target = 100;
position = [0, 2, 4];
speed = [4, 2, 1];
expected = 1;
actual = carFleet(target, position, speed);
console.log(`Expected: ${expected}, actual is ${actual}. Answer is correct: ${expected === actual}!`);

target = 10;
position = [8, 3, 7, 4, 6, 5];
speed = [4, 4, 4, 4, 4, 4];
expected = 6;
actual = carFleet(target, position, speed);
console.log(`Expected: ${expected}, actual is ${actual}. Answer is correct: ${expected === actual}!`);

target = 10;
position = [0, 4, 2];
speed = [2, 1, 3];
expected = 1;
actual = carFleet(target, position, speed);
console.log(`Expected: ${expected}, actual is ${actual}. Answer is correct: ${expected === actual}!`);
