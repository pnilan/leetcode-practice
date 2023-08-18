// https://leetcode.com/problems/balanced-binary-tree/

/*
Given a binary tree, determine if it is
height-balanced.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-10^4 <= Node.val <= 10^4
*/

// IOCE
// I: root node
// O: boolean
// C: n/a
// E: tbd

// Strategy
// recursive
// Compare depth of left and right children

var isBalanced = function(root) {
  if (!root) { return true; }
  if (maxDepth(root) === -1) { return false; }
  return true;
};

var maxDepth = (root) => {

  if (!root) { return 0; }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  if (leftDepth === -1 || rightDepth === -1) { return -1; }
  if (Math.abs(leftDepth - rightDepth) > 1) { return -1; }

  return Math.max(leftDepth, rightDepth) + 1;
};