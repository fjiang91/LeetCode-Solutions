/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//Create an 2d array to store the char at their correct row,col
var convert = function(s, numRows) {
  if(!s.length) return s;
  //If only 1 row, then it must be the same as s. -> 'AB' -> 'AB'
  if (numRows === 1) {
      return s;
  }

  let res = [];
  let row = 0;
  let col = 0;
  let index = 0;
  let zigZag = false;
  for (let i = 0 ; i < numRows; i++){
      res[i] = new Array(numRows);
  }

  //An index counter to know that we have reached the end of the string
  while (index < s.length) {
    //Going down and constructing the array
      while(!zigZag && index < s.length && row < numRows) {
          res[row][col] = s[index];
          row++;
          index++;
          if (row === numRows) {
              zigZag = true;
              row--;
          }
      }
      //Going zigZag upward constructing the array
      while(zigZag && index < s.length && row < numRows) {
          col++;
          row--;
          res[row][col] = s[index];
          index++;
          if (row === 0) {
              zigZag = false;
              row++;
          }
      }
  }

  return res.reduce((accum, curr) => accum + curr.join(''), '');
};

