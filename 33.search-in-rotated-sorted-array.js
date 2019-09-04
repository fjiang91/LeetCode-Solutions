/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
O(log n) -> Time Complexity -> Binary Search
O(1) -> Space Complexity -> Left and Right Constant
Apply sorted array concept with binary search, that one side of the rotated array must be sorted even if rotated
*/
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  //Binary Search
  //We know that one side of the array is sorted
  //Left <= Right for regular binary search -> in case left,right falls under same index
  while (left <= right) {
      let mid = Math.floor( (left+ (right - left) / 2));
      if (nums[mid] === target) return mid;
      //Check which side is sorted
      //Left Side is sorted -> [4,5,6,7] -> 7 -> 4
      //If sorted, then we can check if target is within that range
      //Set the right to mid
      if ( nums[mid] >= nums[left]) {
          //We check if the target is within the sorted range, [4,5,6,7] -> 5 is within range
          //If yes, then we can shorten our right side to mid - 1
          if (nums[mid] >= target && nums[left] <= target) {
              right = mid - 1;
          } else {
              //If not within range, then we know number is not within that range
              left = mid + 1;
          }
      } else {
          //If the left side is not sorted, then right side is
          //Check if target within our range
          if (nums[mid] <= target && nums[right] >= target) {
              left = mid + 1;
          } else {
              //If not within range, we move right to mid - 1
              right = mid - 1;
          }
      }
  };

  return -1
};

