/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  //Initialize a dummyHeader to keep track of the head
  let nextStack = [];
  let dummyHead = head;
  //Keep a prev node to know where to point our curr node where we popped off from the stack to point to
  //curr.prev = prev;
  let curr = head;
  let prev = null;

  while (curr || nextStack.length) {
      //If our curr is null, then we hit the end of the link
      //then we need to pop off the last item
      if (!curr) {
          curr = nextStack.pop();
          if(!curr) return dummyHead;
      }

      //If the curr have a child, we push it into the stack and iteraite through it's child
      //Point the curr.next to the child and set the curr's child into null
      if (curr.child) {
          nextStack.push(curr.next);
          if (curr.next) curr.next.prev = null;
          let tempChild = curr.child;
          curr.next = tempChild;
          curr.child = null;
      }

      //Reconnect the prev and curr if they're disconnected
      if(prev) prev.next = curr;
      curr.prev = prev;
      prev = curr;
      curr = curr.next;
  }
  return dummyHead;
};

