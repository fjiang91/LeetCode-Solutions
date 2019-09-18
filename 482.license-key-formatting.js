/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

 /*
* O(n ^ 2) -> Time Complexity -> one while loop to decrease index, however creating a new string each time
* O(n) -> Space Complexity -> new str
* Approach -> Replace all - with "", and then loop through
* the string from back to front
* at every K index, add a '-;
* reverse the string at adding char
* Edge Case / Questions to Ask
* 1. What if the string be empty?
* 2. Are there other symbols within the string besides -?
*/
var licenseKeyFormatting = function(S, K) {
  let convertedS = S.split('-').join('');
  let index = convertedS.length - 1;
  let str = '';
  while(index >= 0){
      for (let i = 0; i < K; i++){
          let char = convertedS[index].toUpperCase();
          str += char;
          index--;
          if (index < 0) break;
      }
      if (index >= 0) str += '-'
  }

  return str.split('').reverse().join('');
};

//Create a new array without '-' and uppercase every char
//Then, split the string into an arr
//at every Kth index, add the '-'
//return arr as a string with join
var licenseKeyFormatting = function(S, K) {
  let convertedS = S.split('-').map(char => char.toUpperCase()).join('');
    convertedS = convertedS.split('')
  for (let i = convertedS.length - 1 - K; i >= 0; i -= K){
    convertedS[i] += '-';
  }

  return convertedS.join('');
};

