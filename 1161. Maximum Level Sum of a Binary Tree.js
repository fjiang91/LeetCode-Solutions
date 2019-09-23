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
 /*
* O(n) -> Time Complexity -> visit each node once
* O(n) -> Space Complexity -> Arr to keep sum at each level
* Approach -> DFS and keep a sum for each level. Return the maxSum's level
* Edge Case / Questions to Ask
* 1. What if the tree be empty?
* 2. Will there be negative values?
* 3. Will there be multiple levels with the same sum?
*/

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

//JavaScript DFS Approach
var maxLevelSum = function(root) {
    let sumArr = [];
    findLevelSum(root, sumArr, 1)
    console.log(sumArr);
    let maxSum = -Number.MAX_SAFE_INTEGER;
    let level = 0;
    for (let i = 1; i < sumArr.length; i++){
        if (sumArr[i] > maxSum) {
            maxSum = sumArr[i];
            level = i;
        };
    }
    return level;
};

function findLevelSum (node, sumArr, level = 1) {
    if (!node) return;

    if(!sumArr[level]) sumArr[level] = 0;
    sumArr[level] += node.val;
    findLevelSum(node.left, sumArr, level + 1);
    findLevelSum(node.right, sumArr, level + 1);

    return;
};

//Python 3 Solution
//Iterative Approach
class Solution:
    def maxLevelSum(self, root: TreeNode) -> int:
        queue = collections.deque([[root, 1]])
        maxSum = 0;
        maxLevel = 0;
        while queue:
            qSize = len(queue)
            currSum = 0
            currLevel = 0
            for i in range(qSize):
                n = queue.popleft()
                node = n[0]
                nodeVal = node.val
                nodeLevel = n[1]
                currLevel = nodeLevel
                currSum += nodeVal
                if node.left:
                    queue.append([node.left, nodeLevel + 1])
                if node.right:
                    queue.append([node.right, nodeLevel + 1])
            if currSum > maxSum:
                maxSum = currSum
                maxLevel = nodeLevel

        return maxLevel
