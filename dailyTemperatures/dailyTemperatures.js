/**
 * Given an array of integers temperatures represents the daily temps,  return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature,  if there is no future day for which this is possible, keep answer[i] == 0 instead
 *
 * IOCE
 * Input: array of integers, temperatures
 * Output: array of integers, answer
 * Constraints: n/a
 * Edge Cases: if no warmer day, then answer[i] = 0
 *
 * Strategy:
 * Stack
 * if temp[i] < temp[i + 1], then answer[i] must be answer[i + 1] + 1, unless no warmer days in
 * iterate backwards through array and add "warmer" days to stack?
 *
 *
 *
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */

const dailyTemperatures = (temps) => {

  let answer = Array(temps.length).fill(0);
  let stack = [];

  for (let day = 0; day < temps.length; day++) {

    while (canShrink(stack, temps, day)) {
      let prevColdDay = stack.pop();
      let daysToWait = (day - prevColdDay);

      answer[prevColdDay] = daysToWait;
    }

    stack.push(day);
  }

  console.log(answer);
  return answer;
};

const canShrink = (stack, temps, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, curTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < curTemp;
  return stack.length && isWarmer;
};

let temps = [73, 74, 75, 71, 69, 72, 76, 73];
let expected = [1, 1, 4, 2, 1, 1, 0, 0];
let actual = dailyTemperatures(temps);
console.log(JSON.stringify(actual) === JSON.stringify(expected));

temps = [30, 40, 50, 60];
expected = [1, 1, 1, 0];
actual = dailyTemperatures(temps);
console.log(JSON.stringify(actual) === JSON.stringify(expected));

temps = [30, 60, 90];
expected = [1, 1, 0];
actual = dailyTemperatures(temps);
console.log(JSON.stringify(actual) === JSON.stringify(expected));


