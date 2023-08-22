// https://leetcode.com/problems/add-binary/

/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

*/

// 1. IOCE
// Input: two strings
// Output: string
// Constraints: n/a
// Edge Cases: n/a
//
// 2. Strategy
// create result string
// remainder variable
// iterate over longer string
// if str1[i] === '1' && str2[i] === '1'
//  add "0" to result string, increment remainder variable
// else if str1[i] === '1' || str2[i] === '1' && remainder > 0
//  add '0' to result, subtract 1 from remainder
// else if remainder > 0
//  if remainder === 1
//    add '1' to result, remainder = 0
//  if remainder >= 2
//    add '0' to retsult, remainder -= 2
// else
//  add str[i] to result

const addBinary = (a, b) => {

  var binaryResult = [];
  var remainder = false;
  var i = 0;

  a = a.split('').reverse();
  b = b.split('').reverse();

  var primary = a;
  var secondary = b;

  if (b.length > a.length) {
    primary = b;
    secondary = a;
  }


  while (i < primary.length || remainder) {

    if (i >= primary.length && remainder) {
      binaryResult.push('1');
      remainder = false;
    } else if (primary.length > secondary.length && i >= secondary.length) {
      if (primary[i] === '1') {
        if (remainder) {
          binaryResult.push('0');
        } else {
          binaryResult.push('1');
        }
      } else {
        if (remainder) {
          binaryResult.push('1');
          remainder = false;
        } else {
          binaryResult.push('0');
        }
      }
    } else if (primary[i] === '1' && secondary[i] === '1') {
      if (remainder) {
        binaryResult.push('1');
      } else {
        binaryResult.push('0');
        remainder = true;
      }
    } else if (primary[i] === '1' || secondary[i] === '1') {
      if (remainder) {
        binaryResult.push('0');
      } else {
        binaryResult.push('1');
      }
    } else if (primary[i] === '0' && secondary[i] === '0') {
      if (remainder) {
        binaryResult.push('1');
        remainder = false;
      } else {
        binaryResult.push('0');
      }
    }

    i++;
  }
  return binaryResult.reverse().join('');
};

console.log(addBinary('101111', '10'), 'should be 110001');