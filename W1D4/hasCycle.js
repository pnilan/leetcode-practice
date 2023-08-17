// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {

  if (!head || !head.next) { return false; }

  head.val = null;

  if (head.next.val === null) {
    return true;
  } else {
    return hasCycle(head.next);
  }
};