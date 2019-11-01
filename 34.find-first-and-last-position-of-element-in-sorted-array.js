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
    let leftP = -1;
    let rightP = -1;

    let left = 0;
    let right = nums.length - 1;

    //Search Left
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if ( nums[mid] === target || nums[mid] > target) {
            if (nums[mid] === target) leftP = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    left = 0;
    right = nums.length - 1;
    //Search Right
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            if (nums[mid] === target) rightP = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [leftP, rightP];
};

module.exports = searchRange;

