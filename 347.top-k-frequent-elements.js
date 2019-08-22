/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Create a hashMap of all numbers with their frequency
//Use a quick select to sort the array until it reaches the numsEntry - k index
//Then everything on the left of that index is smaller and everything on the right will be within the top k range
var topKFrequent = function(nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++){
      map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  let numsEntry = Object.entries(map);
  let start = 0;
  let end = numsEntry.length - 1;
  //This is the index we want to find that the right of it will all be within
  //the top k range
  let targetIndex = numsEntry.length - k;
  while( start < end) {
      let pivotIndex = pivot(numsEntry, start, end);
      if (pivotIndex === targetIndex) break;
      if (pivotIndex > targetIndex) end = pivotIndex - 1;
      else start = pivotIndex + 1;

  }
  return numsEntry.slice(targetIndex).map( entry => entry[0])
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => {
      [arr[i],arr[j]] = [arr[j], arr[i]]
  }

  let pivot = arr[start][1];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++){
      if (pivot > arr[i][1]) {
          swapIdx++;
          swap(arr, swapIdx, i);
      }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

