/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */

 /*
* O() -> Time Complexity - Backtracking and only append if we keep the parenthesis valid
* O() -> Space Complexity -> Backtracking and recursion
* Approach -> Recursively call the helper function and have open and close to keep track of remaining parenthesis we have left
* Always keep the parenthesis valid, while doing recursion
* If we encounter a zero, we swap it's redP and i index and move both pointer
* Edge Case / Questions to Ask
* 1.
*/

var generateParenthesis = function(n) {
  if (n <= 0) return '';
  const arr = [];
  genHelper(arr, "", n, n);
  return arr;
};

//Helper function
//When we have no open and close, then we formed a valid parethensis
//keep a open and close variable
const genHelper = (arr, currGen, open, close) => {
  if (open === 0 && close === 0) {
      arr.push(currGen);
      return;
  }

  //We know we can insert a (, if it is more than 0
  if (open > 0) genHelper(arr, currGen + '(', open - 1, close);

  //We know we can keep it valid, if we seem a opening before
  if (close > open) genHelper(arr, currGen + ')', open, close - 1);

  return;
};
