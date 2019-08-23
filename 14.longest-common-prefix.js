/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
//Compare the currPrefix we have with the next word
//Use a tempPrefix to store the new Prefix
var longestCommonPrefix = function(strs) {
  //Edge case when there's nothing or just one char
  //then its the only prefix
  if(!strs.length || strs.length === 1) {
      return strs.join('');
  }

  //Initalize currPrefix to first word
  let currPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
      let tempPrefix = '';
      let currWord = strs[i];
      //If one of them is empty then theres no possible prefix
      if(!currPrefix.length || !currWord.length) return '';
      //Loop through both word and compare their prefix chars
      for (let j = 0; j < currWord.length && j < currPrefix.length; j++) {
          if (currPrefix[j] === currWord[j]) {
              tempPrefix += currPrefix[j];
          } else {
              break;
          }
      }
      currPrefix = tempPrefix;
  }
  return currPrefix
};

