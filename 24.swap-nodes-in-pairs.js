/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
* O(n) -> Time Complexity
* O(1) -> only constant variables to keep track of ListNode
* Approach -> Iterative Approach - Use a dummyHead and a sliding window of 3 nodes
* If only swap 1 and 2, the DummyHead's reference will be lost/mess up
* D -> 1 -> 2
* Swap 1 and 2, then make sure 1 points to 2.next, and D points to the new next which is 2
* D -> 2 -> 1
* Set D/curr to 1
* Edge Case / Questions to Ask
* 1. What if the list is empty?
* 2.
*/
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let returnHead = new ListNode();
  returnHead.next = head;
  let curr = returnHead;
  let slow, fast;
  while (curr.next && curr.next.next) {
      slow = curr.next;
      fast = curr.next.next;
      let temp = slow;
      curr.next = fast;
      temp.next = fast.next;
      fast.next = slow;
      curr = slow;
  };
  return returnHead.next;
};

