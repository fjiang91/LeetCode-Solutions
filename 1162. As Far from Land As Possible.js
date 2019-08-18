/**
 * @param {number[][]} grid
 * @return {number}
 */
//Perform a DFS on each water and look for nearest land
//Time Exceed for large grid
var maxDistance = function(grid) {
  if(!grid.length) return -1;
  let maxDis = -1;

  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++){
        //If water perform DFS look up
        if (grid[row][col] === 0) {
          let currDis = checkDistance(grid, row, col, row, col, 0, {});
          maxDis = Math.max(maxDis, currDis);
      }
  }
}
return maxDis === Number.MAX_SAFE_INTEGER ? -1 : maxDis;
};

const checkDistance = (grid, originalRow, originalCol, row, col, visited) => {
if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) return Number.MAX_SAFE_INTEGER;
if (grid[row][col] === 1) {
  return Math.abs(originalRow - row) + Math.abs(originalCol - col);
}
let cell = row + '-' + col;
if (visited[cell]) return Number.MAX_SAFE_INTEGER;
visited[cell] = true;
let num1 = checkDistance(grid, originalRow, originalCol, row + 1, col, visited);
let num2 = checkDistance(grid, originalRow, originalCol, row - 1, col, visited);
let num3 = checkDistance(grid, originalRow, originalCol, row, col + 1, visited);
let num4 = checkDistance(grid, originalRow, originalCol, row, col - 1, visited);

return Math.min(num1, num2, num3, num4);
};

//Code Inspired by votrubac
//Perform a DFS search on land going outward
//Replacing each water with steps going to land
//If original steps > the current step, replace it with the closest step
//else return to reduce duplicate DFSing
var maxDistance = function(grid) {
  if(!grid.length) return -1;
  let max = -1;

  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++){
          if (grid[row][col] === 1) {
              checkDistance(grid, row, col, 1);
          }
      }
  }

  for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
          if(grid[i][j] !== 1) {
              max = Math.max(max, grid[i][j])
          }
      }
  }
  return max === - 1 ? -1 : max - 1;
};

const checkDistance = (grid, row, col, steps, visited) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) return;

  if(steps !== 1) {
      if (grid[row][col] !== 0 && grid[row][col] <= steps) {
          return;
      }
      grid[row][col] = steps;
  }

  return checkDistance(grid, row + 1, col, steps + 1)
  || checkDistance(grid, row - 1, col, steps + 1) ||
  checkDistance(grid, row, col + 1, steps + 1) ||
  checkDistance(grid, row, col - 1, steps + 1);
};

