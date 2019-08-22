/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Use a helper recursive function to generate powerset
var subsets = function(nums) {
  if(!nums.length) return [];
  if(nums.length === 1) return [[],nums]
  let powerSet = [[]];
  subSetHelper(nums, powerSet)
  return powerSet
};

//Make a copy of the current power set and append the next number into each of the array within the power set
//Curr Power Set -> [[],[1]], curr num = 2
//New Power Set [[],[1],[2],[1,2]]
const subSetHelper = (nums, powerSet) => {
  if(!nums.length) return [];
  let currSize = powerSet.length;
  let copyPowerSet = [...powerSet];
  for (let i = 0; i < currSize; i++){
      let currSet = copyPowerSet[i];
      currSet = currSet.concat(nums[0]);
      powerSet.push(currSet)
  }
  subSetHelper(nums.slice(1), powerSet);
  return;
};

