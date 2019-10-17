/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;

  let firstP = num1.length - 1;
  let secondP = num2.length - 1;
  let res = '';

  while (firstP >= 0 || secondP >= 0) {
      let sum = 0;
      if (firstP >= 0) {
          sum += Number(num1[firstP--]);
      }
      if (secondP >= 0) {
          sum += Number(num2[secondP--])
      }

      //Add the carry from previous sum and reset carry
      sum += carry;
      carry = 0;

      //If sum is greater than 9, carry 1 over to the next sum
      if (sum > 9) {
          sum %= 10;
          carry = 1;
      }
      res = sum + res;
  };

  //Check if we have a carry from previous sum
  if (firstP < 0 && secondP < 0 && carry > 0) {
      res = carry + res;
  }

  return res;

};

module.exports = addStrings;
// @lc code=end

