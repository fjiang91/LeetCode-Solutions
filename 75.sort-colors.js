/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
* O(n) -> Time Complexity
* O(1) -> Space Complexity -> Pointers to keep track of index
* Approach -> Keep track of the redPointer -> 0 and bluePointer -> nums.length - 1
* If we encounter a zero, we swap it's redP and i index and move both pointer
* If we encounter a 2, then we need to move it to the back or swap with bluePointer and decrease bluePointer
* Else, then it's a 1, we just increase i
* Keep looping until we hit <= bluePointer, since we know that everything above bluePointer have correct color
* Edge Case / Questions to Ask
* 1. What if the nums array be empty?
* 2. Will there only be 3 color variables?
*/
var sortColors = function(nums) {
  let redP = 0;
  let blueP = nums.length - 1;
  let i = 0;
  while ( i <= blueP ) {
      let color = nums[i];
      if (color === 0) swap(nums, i++, redP++)
      else if (color === 2) swap(nums, i, blueP--);
      else i++;
  };
};

const swap = (nums, idx1, idx2) => {
  return [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
};

