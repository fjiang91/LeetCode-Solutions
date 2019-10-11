/*
 * @lc app=leetcode id=675 lang=javascript
 *
 * [675] Cut Off Trees for Golf Event
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  //Populate the queue and sort the queue based on tree height
  //We need to cut the tree in order based on problem description
  let queue = populateQueue(forest);
  queue.sort( (a,b) => a[0] - b[0]);

  let currX = 0;
  let currY = 0;
  let stepCount = 0;

  //Loop through the queue, calculate to get from curr X,Y to next X,Y with BFS helper function
  //If the path is not possible, then return -1
  while(queue.length) {
      let next = queue.shift();
      let nextX = next[1];
      let nextY = next[2];
      let steps = stepToNext(forest, currX, currY, nextX, nextY);
      if (steps === - 1) return -1;

      stepCount += steps;
      currX = nextX;
      currY = nextY;
  };

  return stepCount;
};

//BFS Helper function to calculate to get from source X,Y
//To target X,Y and return the minimum step required for this operation
//If path don't exist, return -1
function stepToNext(forest, sourceX, sourceY, targetX, targetY) {
  let seem = {};
  let queue = [[sourceX, sourceY, 0]];
  let fourDirection = [[0,1],[0, -1], [1, 0], [-1, 0]]

  while (queue.length) {
      let [currX, currY, currStep] = queue.shift();

      if (currX === targetX && currY === targetY) return currStep;

      //Check if currX and currY is visited
      let cell = currX + '-' + currY;
      if (seem[cell]) continue;
      seem[cell] = true

      //Calculate the possible neightbors
      for (let i = 0; i < fourDirection.length; i++) {
          let [row, col] = fourDirection[i];
          let newX = currX + row;
          let newY = currY + col;
          //Make sure newX and newY is within forest boundary
          if (newX < 0 || newX >= forest.length || newY < 0 || newY >= forest[0].length || forest[newX][newY] <= 0) continue;

          queue.push([newX, newY, currStep + 1]);
      };
  };

  return -1;
};

//Helper function to populate the queue with the individual tree within the forest
function populateQueue (forest) {
  let queue = [];
  for (let i = 0; i < forest.length; i++) {
      for (let j = 0; j < forest[0].length; j++){
          if (forest[i][j] > 0) {
              queue.push([forest[i][j], i, j]);
          }
      }
  }
  return queue;
};

module.exports = cutOffTree;
// @lc code=end

