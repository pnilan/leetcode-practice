// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

// 1. IOCE
// Input: root node
// Output: integer
// Constraints: n/a
// Edge Cases: if root doesn't exist, return 0
//
// 2. Strategy
// Recursive
// if root doesn't exist, return 0 (base case)
// call maxDepth on each child, compare and return higher value
// pass down "depth" argument

const maxDepth = (root, depth) => {
  depth = depth || 1;
  if (!root) { return 0; }

  var left = maxDepth(root.left, 1) + depth;
  var right = maxDepth(root.right, 1) + depth;

  return left > right ? left : right;
};