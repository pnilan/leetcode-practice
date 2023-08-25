// https://leetcode.com/problems/insert-interval/

/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Constraints:
0 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^5
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 10^5
*/

// 1. IOCE
// Input: array of subarrays of intervals, new interval (array)
// Output: array of subarrays
// Constraints: n/a
// Edge cases: interval length is 0, push newInterval to interval array and return
//
// 2. Strategy
// create left and right array variables
// iterate through intervals array,
// if newInterval start is greater than current interval end, then push interval to "left" array
// if newInterval end is less than current interval start, then push interval to "right" array
// else
// update the start var to be minimum of current interval start or newInterval start
// and update end var to be max of current interval end or newInterval end
// this will "consume" the intervals as it progresses through the intervals array

const insert = (intervals, newInterval) => {

  var [start, end] = newInterval;
  var left = [];
  var right = [];

  for (var interval of intervals) {
    const [first, last] = interval;

    if (start > last) {
      left.push(interval);
    } else if (end < first) {
      right.push(interval);
    } else {
      start = Math.min(start, first);
      end = Math.max(end, last);
    }
  }

  return [...left, [start, end], ...right];

};