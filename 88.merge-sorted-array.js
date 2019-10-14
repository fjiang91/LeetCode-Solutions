/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let lastId = nums1.length - 1;
  m--;
  n--;

  while (m >= 0 && n >= 0) {
      if (nums1[m] > nums2[n]) {
          nums1[lastId] = nums1[m--];
      } else {
          nums1[lastId] = nums2[n--];
      }
      lastId--;
  };

  for (let i = m; i >= 0; i--) {
      nums1[lastId--] = nums1[i];
  }

  for (let i = n; i >= 0; i--) {
      nums1[lastId--] = nums2[i];
  }

  return nums1;
};

module.exports = merge;
// @lc code=end

