/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//BFS Approach and using a queue to keep track of node and the depth
//Initialize each depth to 0 and then add the val of each depth into its correct depth and return the max sum depth
var maxLevelSum = function(root) {
  if(!root) return 0;
  let levelSum = [];
  let queue = [[root, 0]];

  while(queue.length) {
      let n = queue.shift();
      let node = n[0];
      let depth = n[1];
      //Add val to their correct depth
      if(!levelSum[depth]) levelSum[depth] = 0;
      levelSum[depth] += node.val;

      if(node.left) queue.push([node.left, depth + 1]);
      if(node.right) queue.push([node.right, depth + 1]);
  }

  let maxSum = -Number.MAX_SAFE_INTEGER;
  let maxDepth = -Number.MAX_SAFE_INTEGER;
  //Check if depth's sum if larger than our current max sum
  for (let i = 0; i < levelSum.length; i++) {
      if (levelSum[i] > maxSum) {
          maxSum = levelSum[i];
          maxDepth = i;
      }
  }

  return maxDepth + 1;
};
