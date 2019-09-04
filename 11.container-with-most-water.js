/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
/**
 *
 * O(n^2) -> Time Complexity -> LeftCol and RightCol -> calculates the maxWaterContainer on every iteration
 * O(1) -> Space Complexity
 * Approach -> Take the minHeight of LeftCol and RightCol, and multiple it by RightCol - LeftCol
 */
var maxArea = function(height) {
  let maxWater = 0;

  for (let leftCol = 0; leftCol < height.length; leftCol++){
      for (let rightCol = leftCol + 1; rightCol < height.length; rightCol++){
        //Take the min height, since it can only fill up to the min between left and right
          const minHeight = Math.min(height[leftCol], height[rightCol]);
          //Take the max of our current max or new water area
          maxWater = Math.max(maxWater, minHeight * (rightCol - leftCol))
      }
  }

  return maxWater;
};

/**
 * O(n) -> Time Complexity -> Only iterating each index once, shrinking the leftCol and rightCol depending on height
 * O(1) -> Space Complexity
 * Approach -> Same as above, however have 2 pointer that increases the pointer of the lower height column
 */
var maxArea = function(height) {
  let maxWater = 0;
  let leftCol = 0;
  let rightCol = height.length - 1;
  while (leftCol < rightCol) {
      const minHeight = Math.min(height[leftCol], height[rightCol]);
      maxWater = Math.max(maxWater, minHeight * (rightCol - leftCol));

      //Increase the index for the column with lower height
      if (height[leftCol] > height[rightCol]) rightCol--;
      else leftCol++;
  };

  return maxWater;
};
