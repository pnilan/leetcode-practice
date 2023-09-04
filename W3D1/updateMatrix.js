// https://leetcode.com/problems/01-matrix/

/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 10^4
1 <= m * n <= 10^4
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/

// 1. IOCE
// Input: matrix
// Output: matrix with distance to nearest 0 as value of each cell
// Constraints: n/a
// Edge Cases: n/a (guaranteed to have at least one zero in the matrix)
//
// 2.Strategy
// BFS
// identify all elements with 0, add to queue, else set to infinity
// then iterate over queue to determine if neighboring cell is zero or nonzero,
// if nonzero, add to queue and update value to current cell value + 1
// Instead of finding distance from each 1 to closest zero, this strategy
// takes advantage of "adding" distances from 1 to closest zero

const updateMatrix = (mat) => {

  var queue = [];

  for (var i = 0; i < mat.length; i++) {
    for (var k = 0; k < mat[0].length; k++) {
      if (mat[i][k] === 0) {
        queue.push([i, k]);
      } else {
        mat[i][k] = Infinity;
      }
    }
  }

  var dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length > 0) {
    var [row, col] = queue.shift();

    for (var [r, c] of dir) {
      var r = row + r;
      var c = col + c;

      if (r >= 0 && r < mat.length && c >= 0 && c < mat[0].length && mat[r][c] > mat[row][col] + 1) {
        queue.push([r, c]);
        mat[r][c] = mat[row][col] + 1;
      }
    }
  }

  return mat;

};

var test1 = [[0, 1], [1, 1]];
var expected = [[0, 1], [1, 2]];

console.log(updateMatrix(test1), 'to be', expected);

var test2 = [[0,0,0],[0,1,0],[1,1,1]];
var expected2 = [[0,0,0],[0,1,0],[1,2,1]];

console.log(updateMatrix(test2), 'to be', expected2);