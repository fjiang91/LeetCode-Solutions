/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
/*
* O() -> Time Complexity
* O(n) -> HashMap
* Approach -> Use a while loop and keep looking until the number is 1 or we encounter the same number within our map
* Edge Case / Questions to Ask
* 1.
*/
var isHappy = function(n) {
  let newMap = {};

  while(n !== 1) {
      let strNum = String(n);
      let sum = 0;
      for (let i = 0; i < strNum.length; i++) {
          const num = Number(strNum[i])
          sum += (num * num);
      }
      if (newMap[sum]) return false;
      newMap[sum] = true;
      n = sum;
  };

  return true;
};

