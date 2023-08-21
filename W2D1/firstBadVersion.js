// https://leetcode.com/problems/first-bad-version/

/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1
*/

// 1. IOCE
// Input: n, integer (total versions)
// Output: integer, first bad version
// Constraints: minimize calls to API
// Edge Cases: no bad version => return null?
//
// 2. Strategy
// Seems like a binary search algo would solve this with minimum calls to API
// version numbers always increment
// [1, 2, 3, 4...]
// check if midpoint version is bad, if it is, then max is mid-1 and midpoint is (mid-1)/2
// if midpoint is not bad, then new min is mid + 1 and new midpoint is (max - min / 2) + min

const solution = (isBadVersion) => {

  return (n) => {

    var min = 1;
    var max = n;
    var mid = Math.floor(n / 2);

    while (true) {
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) { return mid; }
        max = mid - 1;
        mid = Math.floor(max / 2);
      } else {
        min = mid + 1;
        mid = Math.floor((max - min) / 2) + min;
      }
    }

  };
};