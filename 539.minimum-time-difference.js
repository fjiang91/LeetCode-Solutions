/*
 * @lc app=leetcode id=539 lang=javascript
 *
 * [539] Minimum Time Difference
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let timeArr = [];
  //Convert the time into minutes
  //We know that the minimum difference is amount two adjacent time period
  for (let i = 0; i < timePoints.length; i++){
      let hour = timePoints[i].slice(0,2) * 60;
      let min = timePoints[i].slice(3, 5) * 1;
      let total = hour + min;
      timeArr.push(total)
  }
  //Sort descending, from biggest to smallest,
  //Maximum minute in 24hour is 1440 minutes
  timeArr.sort((a,b) => b - a);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let prev = 0;
  for (let i = 0; i < timeArr.length; i++){
      let curr = 1440 - timeArr[i];
      console.log(curr, prev)
      if (i !== 0) minDiff = Math.min(minDiff, curr - prev);
      prev = curr;
  }
  //Edge case, check first elem and last elem since they're also adjacent
  let firstAndLast = timeArr[timeArr.length - 1] + (1440 - timeArr[0]);
  return Math.min(minDiff, firstAndLast);
};

