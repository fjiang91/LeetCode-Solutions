/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
//Java Solution
//Use a tempMax to keep track of the current max at the depth and return the max of it compare to other children
class Solution {
  public int maxDepth(Node root) {
      if (root == null) return 0;
      int currMax = 0;
      for (int i = 0; i < root.children.size(); i++){
          currMax = Math.max(currMax, maxDepth(root.children.get(i)));
      }

      return currMax + 1;
  }
}

