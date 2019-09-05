/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
/*
* O(n) -> Time Complexity -> Recursion and Visitng each node once
* O(n) -> HashMap to keep for oldNode lookup
* Approach -> Use a DFS approach and a hashMap to store (oldNode, newNode) to avoid repetitive lookup. We know that if we set oldNode in hashMap, we already visited this note, we can directly return the address of the newNode
* Edge Case / Questions to Ask
* 1. Can multiple node have pointer to the same node
* 2. What if the head is null, what should be returned?
*/
var copyRandomList = function(head) {
  if(!head) return null;
  const dummyHead = new Node();
  dummyHead.next = copyRandomHelper(head, new Map());

  return dummyHead.next;
};

const copyRandomHelper = (oldNode, oldNodeMap) => {
  if (!oldNode) return null;
  if (oldNodeMap.has(oldNode)) return oldNodeMap.get(oldNode);

  const newNode = new Node(oldNode.val);
  oldNodeMap.set(oldNode, newNode);
  newNode.next = copyRandomHelper(oldNode.next, oldNodeMap);
  newNode.random = copyRandomHelper(oldNode.random, oldNodeMap);

  return newNode;
};

