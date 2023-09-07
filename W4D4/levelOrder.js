// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// IOCE
// Input: node object
// Output: array of arrays of numbers/null
// Constraints: n/a
// Edge Cases: ignore no children, per example

// Strategy
// Create queue (FIFO) to add to result array

const levelOrder = (root) => {

  const resultArray = [];

  if (!root) { return resultArray; }

  const queue = [root];

  while (queue.length !== 0) {
    const currentLevel = [];
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      currentLevel.push(currentNode.val);
    }

    resultArray.push(currentLevel);
  }

  return resultArray;
};