/*
* O(n) -> Time Complexity
* O(n) -> Stack
* Approach -> Iterative Approach -> Use a stack
* And keep track of a prev variable for the previous node
* Iterative Inorder Traversal
* Push the far left to the stack and set the prev's right to curr
* curr.left to prev
* Edge Case / Questions to Ask
* 1. What if the root is empty?
* 2. Is it a circular doubly linked list?
*/

var treeToDoublyList = function(root) {
  if(!root) return root;
  let dummyHead = new Node();
  let prev = dummyHead;
  let stack = [];

  while (stack.length || root) {
      while(root) {
          stack.push(root);
          root = root.left;
      };
      root = stack.pop();
      prev.right = root;
      root.left = prev;
      prev = root;
      root = root.right;
  };

  prev.right = dummyHead.right;
  dummyHead.right.left = prev;
  return dummyHead.right
};
