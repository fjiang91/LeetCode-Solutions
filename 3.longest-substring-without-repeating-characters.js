/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
//Two Pointer solution
//Keep increasing the end pointer until we hit a duplicate char
//Take the max of maxCount or (end - start)
var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;
  let foundMap = {};
  let start = 0;
  let end = 0;
  let maxCount = -1;
  while (end < s.length) {
      if(!foundMap.hasOwnProperty(s[end])) {
          foundMap[s[end]] = 1;
          end++;
          maxCount = Math.max(maxCount, end - start);
      } else {
          delete foundMap[s[start]];
          start++;
      }
  };

  return maxCount
};
