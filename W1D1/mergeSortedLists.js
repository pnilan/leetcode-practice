/*
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example: https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

// 1. IOCE
// INPUT: two linked lists
// OUTPUT: one array
// CONSTRAINTS: # of nodes between zero and 50 per list, Node.val is between -100 and 100 (inclusive)
// EDGE CASES: no nodes, return empty list
//
// 2. STRATEGY
// if list1.val <= list2.val
  // list1.next = mergeSortedLists(list1.next, list2);
// else
  // list2.next = mergeSortedLists(list1, list2.next);
//
//

const mergeSortedLists = (list1, list2) => {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val <= list2.val) {
    list1.next = mergeSortedList(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeSortedList(list1, list2.next);
    return list2;
  }
};

