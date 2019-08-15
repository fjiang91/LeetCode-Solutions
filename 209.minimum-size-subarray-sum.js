/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//Sliding window and keeping a sum
//Add num until sum is greater than number
//then substract from the left side until it is invalid
//O(n) - time, O(1) - space
//Similar to Minimum Substring
var minSubArrayLen = function(s, nums) {
  let sum = 0;
  let left = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++){
      sum += nums[i];
      while(sum >= s) {
          minLength = Math.min(minLength, i - left + 1);
          sum -= nums[left];
          left++;
      }
  };

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

