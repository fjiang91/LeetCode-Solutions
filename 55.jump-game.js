/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length <= 1) return true;
  return canHelper(nums, 0, 0 + nums[0]);
};

function canHelper (nums, index, nextIndex) {
  if (nextIndex >= nums.length - 1) return true;

  let status = false;

  for (let i = index + 1; i < nums.length && i <= nextIndex; i++) {
      status = canHelper(nums, i, i + nums[i]) || status;
      if (status) return true;
  };

  return status;
};

module.exports = canJump;
// @lc code=end

