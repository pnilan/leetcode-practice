// https://leetcode.com/problems/reverse-linked-list/

/*
Given the head of a singly linked list, return the reversed list.
*/

/**
Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 */

// 1. IOCE
// Input: head of linked list
// Output: new head of linked list
// Contraints: n/a
// Edge case: no head => return head; if head.next === null => return head
//
// 2. Strategy
// Iterate down the linked list
// There should be three pointers
// Current node, previous node, next node

const reverseList = (head) => {

  if (!head || !head.next) { return head; }

  var currentNode = head;
  var nextNode = head.next;
  var previousNode = null;

  while (!!currentNode) {

    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    if (!currentNode) { break; }
    nextNode = currentNode.next;
  }
  return previousNode;
};