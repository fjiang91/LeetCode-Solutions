/*
 * @lc app=leetcode id=475 lang=javascript
 *
 * [475] Heaters
 */
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

 /*
* O(n ^ 2) -> Time Complexity -> Dynamic Programming -> Keep track of the smallest number that is needed for each particular house to get cover
* O(n) -> Space Complexity -> DP
* Approach -> Brute Force -> Loop through heaters and houses
* Calculate the diff and keep track of the smallest num, the particular house index needs to be cover
* Houses = [1,2,3,4]
* Heaters = [1,4]
* dp after 1st heater = [0,1,2,3]
* dp after 2nd heater = [0,1,1,0]
* Take maxNum of the dp;
* Edge Case / Questions to Ask
* 1. What if one of the array is empty?
* 2. Will there be duplicates within the arrays?
* 3. Are the arrays sorted?
*/


var findRadius = function(houses, heaters) {
  let dp = new Array(houses.length).fill(Number.MAX_SAFE_INTEGER);
  for (let heat = 0; heat < heaters.length; heat++){
      for (let house = 0; house < houses.length; house++){
        let diff = Math.abs(heaters[heat] - houses[house]);
          dp[house] = Math.min(dp[house], diff);
      };
  }
  return Math.max.apply(null, dp);
};

