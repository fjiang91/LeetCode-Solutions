/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//O(n) -> Time Complexity -> Two Loops, one from left, one from right
//O(n) -> Space Complexity -> Result to store product
//Approach -> Keep track of the product of all numbers, before the particular index
//One loop from left -> so the current index will be
//the product all of numbers before the index
//One loop from right -> to multiple the res[index] with the product of number from the right side
var productExceptSelf = function(nums) {
  let res = [];

  let leftProd = 1;
  for (let i = 0; i < nums.length; i++){
      res[i] = leftProd;
      leftProd = nums[i] * leftProd
  }

  rightProd = 1;
  for (let i = nums.length - 1; i >= 0; i--){
      res[i] *= rightProd;
      rightProd = nums[i] * rightProd;
  }

  return res;
};

