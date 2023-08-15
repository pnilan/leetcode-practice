// https://leetcode.com/problems/invert-binary-tree/

/*
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

// 1. IOCE
// INPUT: root node
// OUTPUT: root node
// CONSTRAINTS: n/a
// EDGE CASES: no children => return root
//
// 2. STRATEGY
// Recursive
// Will want to swap the right and left children of each node and invoke inverTree on each child
// base case is when a node is null it should return itself

const invertTree = (root) => {

  if (!root) {
    return root;
  }

  var tempRight = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(tempRight);

  return root;

};