/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n) - Time Complexitiy
//O(n) - Space Complexitiy - storing DP array
//Keep a dp array, that calculates the presum and store the max of the current sum or the presum up to i
var maxSubArray = function(nums) {
  let dp = [];
  let maxSum = -Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++){
      dp[i] = Math.max(nums[i], (dp[i - 1] || 0) + nums[i]);
      maxSum = Math.max(dp[i], maxSum)
  };
  return maxSum;
};

