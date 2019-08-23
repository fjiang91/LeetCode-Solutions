/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Binary Search on the Array
//Two Scans
//One scan to the left to find the left most
//One scan to the right to find the right most
var searchRange = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let leftMost = -1;
  let rightMost = -1;
  //Search Left and narrow down the result with a >= than target [6,7,7,7,7] => >= will decrease the end index --> [6,7]
  while(start <= end){
      let mid = Math.floor( start + (end - start) /2 );
      if (nums[mid] === target) {
          leftMost = mid;
      }
      if (nums[mid] >= target) {
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }

  start = 0;
  end = nums.length - 1;
  //Search Right and narrow down the result with a > than target, [6,7,7,7,7], > will increase mid to go right --> [7,7] -> since 7 is not greater than 7 -> start = mid + 1
  while(start <= end){
      let mid = Math.floor( start + (end - start) /2 );
      if (nums[mid] === target) {
          rightMost = mid;
      }
      if (nums[mid] > target) {
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }
  return [leftMost,rightMost]
};

