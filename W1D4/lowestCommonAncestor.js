// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [2,1], p = 2, q = 1
Output: 2

Constraints:
The number of nodes in the tree is in the range [2, 105].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q
p and q will exist in the BST.
*/

/*
  Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 */

// 1. IOCE
// I: root node, child 1 node, child 2 node
// O: node value
// C: n/a
// E: if one child node is descendant of other child node => return the ancestor node
//
// 2. STRATEGY
// first, check if each node is an ancestor of root
// then check if left is ancestor node of each node
//
//
//
//
//
//

const lowestCommonAncestor = (root, p, q) => {

  if ((root.val === p.val && (isAncestorOfNode(root.left, q) || isAncestorOfNode(root.right, q))) || (root.val === q.val && (isAncestorOfNode(root.left, p) || isAncestorOfNode(root.right, p)))) {
    return root;
  } else if (isAncestorOfNode(root.left, p) && isAncestorOfNode(root.left, q)) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (isAncestorOfNode(root.right, p) && isAncestorOfNode(root.right, q)) {
    return lowestCommonAncestor(root.right, p, q);
  } else if ((isAncestorOfNode(root.left, p) && isAncestorOfNode(root.right, q)) || (isAncestorOfNode(root.left, q) && isAncestorOfNode(root.right, p))) {
    return root;
  } else {
    return null;
  }

};

const isAncestorOfNode = (root, node) => {

  if (!root) { return false; }
  if (root.val === node.val) { return true; }

  if (isAncestorOfNode(root.left, node)) {
    return true;
  } else {
    return isAncestorOfNode(root.right, node);
  }
};