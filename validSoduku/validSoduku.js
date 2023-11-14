/**
 * Determine if a 9x9 sudoku board is valid.
 * Note: a sudoku board that is particially filled could be valid but not necessarily solvable
 * Only filled cells need to be validated
 *
 * IOCE:
 * Input: matrix (array of array of nums), board
 * Output: boolean
 * Constraints: n/a
 * Edge cases: partially filled -> could be valid but not solvable
 *
 * Strategy:
 * - each 9x9 section
 * - each row
 * - each column
 *
 * 1) check for duplicates in each row
 * 2) check for duplicates in each column
 * 3) check for duplicates in each 9x9 section
 *
 * @param {number[][]} board
 * @return {boolean}
 */

const isValidSoduku = (board) => {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (j % 3 === 0 && i % 3 === 0) {
        if (!isValidSection(board, i, j)) {
          return false;
        }
      }
      if (isValidRow(board, i) && isValidCol(board, j)) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;

};

const isValidRow = (board, row) => {
  let set = new Set();
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === '.') {
      continue;
    }
    if (set.has(board[row][i])) {
      return false;
    } else {
      set.add(board[row][i]);
    }
  }
  return true;
};

const isValidSection = (board, row, col) => {
  let set = new Set();
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (board[i][j] === '.') {
        continue;
      }
      if (set.has(board[i][j])) {
        return false;
      } else {
        set.add(board[i][j]);
      }
    }
  }
  return true;
};

const isValidCol = (board, col) => {
  let set = new Set();
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === '.') {
      continue;
    }
    if (set.has(board[i][col])) {
      return false;
    } else {
      set.add(board[i][col]);
    }
  }
  return true;
};

let board = [["5","3",".",".","7",".",".",".","."], ["6",".",".","1","9","5",".",".","."], [".","9","8",".",".",".",".","6","."], ["8",".",".",".","6",".",".",".","3"], ["4",".",".","8",".","3",".",".","1"], ["7",".",".",".","2",".",".",".","6"], [".","6",".",".",".",".","2","8","."], [".",".",".","4","1","9",".",".","5"], [".",".",".",".","8",".",".","7","9"]];

console.log(isValidSoduku(board));

board = [["8","3",".",".","7",".",".",".","."], ["6",".",".","1","9","5",".",".","."], [".","9","8",".",".",".",".","6","."], ["8",".",".",".","6",".",".",".","3"], ["4",".",".","8",".","3",".",".","1"], ["7",".",".",".","2",".",".",".","6"], [".","6",".",".",".",".","2","8","."], [".",".",".","4","1","9",".",".","5"], [".",".",".",".","8",".",".","7","9"]];

console.log(isValidSoduku(board));