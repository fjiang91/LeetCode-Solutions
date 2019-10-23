/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  //Edge cases k is 0, we can't remove anything
  if (k === 0) return num;
  //If k is greater than num length, then we can remove all digits from num
  if (k >= num.length) return '0';

  let numLen = num.length;
  let stack = [];

  //
  for (let i = 0; i < numLen; i++) {
    //Check last index within stack to curr stack
    //Creating an increasing order stack
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  //Edge case where if we didn't pop off enough numbers to meet k
  //Continue popping from the stack, since our stack will be in increasing order
  while (k > 0) {
    stack.pop();
    k--;
  }

  //Remove any leading zeros
  //Cannot convert directly to integer due to the size of the string
  let id = 0;
  while (id < stack.length - 1 && stack[id] === '0') id++;

  let res = '';
  while (id < stack.length) {
    res += stack[id++];
  }

  return res;
};

module.exports = removeKdigits;
// @lc code=end
