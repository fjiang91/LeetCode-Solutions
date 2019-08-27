/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
//Javascript Solution
//Perform a DFS when locating a grid cell with 1
//Change the 1 to # or 0 indicating that we have already visited the cell to avoid repeated travsersing
var numIslands = function(grid) {
  let island = 0;
  for (let row = 0; row < grid.length; row++){
      for (let col = 0; col < grid[0].length; col++){
          if (grid[row][col] === "1") {
              islandHelper(grid, row, col)
              island++;
          }
      }
  }
  return island;
};

function islandHelper( grid, row, col) {
  if(row < 0 || row >= grid.length || col >= grid[0].length || col < 0 || grid[row][col] !== '1') return;
  grid[row][col] = '#'
  islandHelper(grid, row + 1, col)
  islandHelper(grid, row - 1, col)
  islandHelper(grid, row, col + 1)
  islandHelper(grid, row, col - 1);
  return;
};

//Java Solution to Number of Islands
//
// class Solution {
//     public int numIslands(char[][] grid) {
//         int count = 0;

//         for (int i = 0; i < grid.length; i++) {
//             for (int j = 0; j < grid[i].length; j++){
//                 if (grid[i][j] == '1') {
//                     islandHelper(grid, i, j);
//                     count++;
//                 }
//             }
//         }
//         return count;
//     }

//     private void islandHelper(char[][]grid, int row, int col) {
//         if (row >= grid.length || row < 0 || col >= grid[row].length || col < 0) {
//             return;
//         }

//         if (grid[row][col] != '1') {
//             return;
//         }

//         grid[row][col] = '0';

//         islandHelper(grid, row + 1, col);
//         islandHelper(grid, row - 1, col);
//         islandHelper(grid, row, col + 1);
//         islandHelper(grid, row, col - 1);
//         return;
//     }
// }

