/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxProd = -Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++){
      let curr = nums[i];
      for (let j = i; j < nums.length; j++){
          if (i !== j) curr *= nums[j];
          maxProd = Math.max(maxProd, curr);
      };
  };

  return maxProd;
};

module.exports = maxProduct;
// @lc code=end

