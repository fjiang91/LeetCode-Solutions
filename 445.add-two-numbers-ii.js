/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
* O(n) -> Time Complexity -> No looped
* O(n) -> Call Stack due to Recursive Function
* Approach -> Find the length of both listNodes
* Add the longer node into curr.next
* Else, add their both node into the curr.next
* Then recursively call the function on both node.next
* Return value of the function is a overflow value
* Add the value to our curr.next and check if it overFlow
* In the main function, make sure to handle the last overflow value
* Edge Case / Questions to Ask
* 1. What if the list is empty?
* 2.
*/
var addTwoNumbers = function(l1, l2) {
  let l1Length = findLength(l1);
  let l2Length = findLength(l2);
  let longLen = l1Length > l2Length ? l1 : l2
  let shortLen = l1Length > l2Length ? l2 : l1
  let longLenNum = l1Length > l2Length ? l1Length : l2Length
  let shortLenNum = l1Length > l2Length ? l2Length : l1Length

  let dummy = new ListNode();
  let curr = dummy;

  let overFlow = recursiveAdd(curr, longLen, longLenNum, shortLen, shortLenNum);
  if (overFlow === 1) {
      dummy.val = 1;
      return dummy;
  };
  return dummy.next;

};

/**
 *
 * @param {ListNode} curr
 * @param {ListNode} l1
 * @param {num} l1Len
 * @param {ListNode} l2
 * @param {num} l2Len
 * Recursive function to add up the two ListNode
 * l1 -> longer listNode
 * l2 -> shorter listNode
 */
const recursiveAdd = (curr, l1, l1Len, l2, l2Len) => {
  if(!l1 || !l2) return 0;
  let overFlow = 0;
  //Check if l1 is longer than l2, then we only need to
  //create a new node with l1 only
  //else add both l1 and l2
  if ( l1Len > l2Len ) {
      //Uses curr.next to keep track the listNode.next
      curr.next = new ListNode(l1.val);
      overFlow = recursiveAdd(curr.next, l1.next, l1Len - 1, l2, l2Len);
  } else {
      curr.next = new ListNode(l1.val + l2.val);
      overFlow = recursiveAdd(curr.next, l1.next, l1Len - 1, l2.next, l2Len - 1);
  }

  //Add the overflow value to curr
  curr.next.val += overFlow;

  //If our new curr.next.val is over 9, then we need
  //to mod 10 to get correct value and return the
  //overflow value
  if ( curr.next.val > 9) {
      overFlow = 1
      curr.next.val %= 10;
  } else {
      overFlow = 0;
  }

  return overFlow;
};

/**
 *
 * @param {ListNode} listNode
 * Helper function to count the length of each node
 */
const findLength = (listNode) => {
  let count = 0;
  while(listNode !== null) {
      listNode = listNode.next;
      count++;
  };
  return count;
};

