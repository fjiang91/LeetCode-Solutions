/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
* O(n) -> Time Complexity
* O(1) -> Space Complexity
* Approach -> Keep track of number of non zeros we have, and use a pointer to shift all non zeros to the front
* Replace all nums after zeroCount with 0
* Edge Case
* 1. What if the array is empty?
* 2. Is there a space/time constrain?
*/
var moveZeroes = function(nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[zeroCount] = nums[i];
          zeroCount++;
      }
  };

  for (let i = zeroCount; i < nums.length; i++) {
    nums[i] = 0;
  };
};

