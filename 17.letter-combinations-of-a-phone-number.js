/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

/*
* O() -> Time Complexity - Backtracking
* O() -> Space Complexity -> Backtracking and recursion
* Approach -> Predefine the letters possible with a particular digits
* Recursive call the helper function and add the current possible letter to the currPhone combination
* and pass the rest of the digits
* Edge Case / Questions to Ask
* 1. Will there be invalid digits? If so, how should I handle them
* 2. Will the possible letters be lower case only?
* 3. What should be return if there's no digits
*/

var letterCombinations = function(digits) {
  if(!digits.length) return []
  let letterObj = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }
  let arr = [];

  letterHelper(digits, arr, "", letterObj);

  return arr;
};

const letterHelper = (digits, arr, currPhone, letterObj) => {
  if (digits.length === 0) {
      arr.push(currPhone);
      return;
  }

  let currDigit = digits[0];
  let possibleLetter = letterObj[currDigit];
  for (let i = 0; i < possibleLetter.length; i++){
      letterHelper(digits.slice(1), arr, currPhone + possibleLetter[i], letterObj);
  };

  return;
};

