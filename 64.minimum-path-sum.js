/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  //Retrieve destination target cell
  let [targetRow, targetCol] = [grid.length - 1, grid[0].length - 1];
  //Create a copy of the grid
  let dp = grid.map(row => row.slice());

  for (let row = 0; row <= targetRow; row++) {
    for (let col = 0; col <= targetCol; col++) {
      if (row === 0 && col >= 1) {
        //Populate the 0th row with presum
        let last = dp[row][col - 1];
        dp[row][col] += last;
      } else if (col === 0 && row >= 1) {
        //Populate the 0th column with presum
        let last = dp[row - 1][col];
        dp[row][col] += last;
      } else if (row !== 0 && col !== 0) {
        //Populate the current cell with min value from top and left grid
        let curr = grid[row][col];
        let topCurr = curr + dp[row - 1][col];
        let leftCurr = curr + dp[row][col - 1];
        dp[row][col] = Math.min(topCurr, leftCurr);
      }
    }
  }

  return dp[targetRow][targetCol];
};

module.exports = minPathSum;
// @lc code=end
