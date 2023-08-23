// https://leetcode.com/problems/middle-of-the-linked-list/

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/

// 1. IOCE
// Input: head of linkedlist
// Output: middle node
// Constraints: n/a
// Edge Cases: if two middle nodes, return the second middle node
//
// 2. Strategy
// iterate through linked list, count how many nodes exist
// then cut the count by half
// iterate through list again, decrementing count by 1 each time,
// when count === 0 return node

var middleNode = function(head) {

  var currentNode = head;
  var count = 0;

  while (currentNode) {
    currentNode = currentNode.next;
    count++;
  }

  count = Math.floor(count / 2);

  currentNode = head;
  while (true) {
    if (count === 0) { return currentNode; }
    currentNode = currentNode.next;
    count--;
  }

};
