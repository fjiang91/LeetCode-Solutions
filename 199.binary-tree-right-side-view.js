/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//O(n) - time complexity - visit each node once
//O(n) - space complexitiy - for queue and rightView arr
//Iterative Approach - BFS - Keep track of the most right when size is 0, then we're at the end of our level
var rightSideView = function(root) {
  if(!root) return [];
  let rightView = [];
  let queue = [root];

  while(queue.length > 0) {
      let size = queue.length;
      while(size > 0) {
          let node = queue.shift();
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
          size--;
          if (size === 0) rightView.push(node.val);
      };
  };
  return rightView;
};

//Recursive Approach - DFS - right side first
var rightSideView = function(root) {
  if(!root) return [];
  let rightView = [];
  rightSideHelper(root, rightView)
  return rightView;
};

const rightSideHelper = (node, rightView, depth = 0) => {
  if (!node) return;

  if(!rightView[depth]) rightView[depth] = node.val;

  rightSideHelper(node.right, rightView, depth + 1);
  rightSideHelper(node.left, rightView, depth + 1);
  return;
};

