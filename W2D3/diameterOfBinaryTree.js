// https://leetcode.com/problems/diameter-of-binary-tree/

/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1

Constraints:

The number of nodes in the tree is in the range [1, 10^4].
-100 <= Node.val <= 100
*/

// 1. IOCE
// Input: root node
// Output: length of longest path
// Constraints: n/a
// Edge Cases: root is null, return 0
//
// 2. Strategy
// Should retrieve max length of left and right nodes, therefore maxDiameter = left max depth + right max depth + 1 (root node)
// this will need to be performed on each node, so recursively call on left and right children,
// consider passing down the maxDiam variable and if current node diam <= maxDiam, then return -1
// Note that length is the number of paths between nodes

const diameterOfBinaryTree = function(root, maxDiameter) {
  maxDiameter = maxDiameter || 0;
  if (!root) { return 0; }

  var currentDiameter = lengthToDeepestChild(root.left, 1) + lengthToDeepestChild(root.right, 1);

  maxDiameter = currentDiameter > maxDiameter? currentDiameter : maxDiameter;

  var leftDiameter = diameterOfBinaryTree(root.left, maxDiameter);
  maxDiameter = leftDiameter > maxDiameter ? leftDiameter : maxDiameter;

  var rightDiameter = diameterOfBinaryTree(root.right, maxDiameter);
  maxDiameter = rightDiameter > maxDiameter ? rightDiameter : maxDiameter;

  return maxDiameter;

};

const lengthToDeepestChild = (root, length) => {

  length = length || 0;
  if (!root) { return 0; }

  if (!root.left && !root.right) {
    return length;
  }

  if (root.left !== undefined) {
    var left = length + lengthToDeepestChild(root.left, 1);
  }

  if (root.right !== undefined) {
    var right = length + lengthToDeepestChild(root.right, 1);
  }

  return left >= right ? left : right;

};