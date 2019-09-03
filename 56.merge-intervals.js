/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//O(n log n) -> Time Complexity -> Sorting intervals //Visitng each interval only once afterwards
//O(n) -> Space Complexity - Sorting result
//Approach -> Sort the intervals
//Use a tempInterval to compare it's [1] index to next interval at [0] index
//If smaller, then we know that we can merge
var merge = function(intervals) {
  if(!intervals.length) {
      return [];
  };

  //Sort interval based on first index, so we can for comparison or merging
  intervals.sort( (a,b) => a[0] - b[0]);

  //Push the first interval into the res and start comparing
  let newInterval = intervals[0];
  const res = [ newInterval ];
  //If the next interval is less than the end(second number) within the new
  //interval, we have a merge, [1,4], [2, 6] -> since 2 is less than 4
  //we know that we can merge it to [1,6]
  for (let i = 1; i < intervals.length; i++){
      //If found a intersection take the max of the 1st index
      if ( newInterval[1] >= intervals[i][0] ) {
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      } else {
          //we found a new interval
          newInterval = intervals[i];
          res.push(newInterval);
      }
  }

  return res;
};

//Same concept, except use a stack to keep track of
//merge intervals. Keep on popping off the stack
//once we found that the curr intervals [0] index
//is less than the lastIntervals' [1] index
//[1,5], [2,7] -> [1,7]
var merge = function(intervals) {
  if(!intervals.length) {
      return [];
  };

  intervals.sort( (a,b) => a[0] - b[0])

  let stack = [];

  for (let i = 0 ; i < intervals.length; i++){
      let curr = intervals[i];
      while(stack.length && curr[0] <= stack[stack.length-1][1] && curr[1] >= stack[stack.length-1][0]){
          let lastStack = stack.pop();
          curr[0] = Math.min(curr[0], lastStack[0]);
          curr[1] = Math.max(curr[1], lastStack[1]);
      }
      stack.push(curr);
  }
  return stack
};

