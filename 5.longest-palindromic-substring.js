/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
//Expand around the center and increasing by 0.5 each time to take into account for odd length
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let index = 0;
  let longestStr = '';

  while (index < s.length) {
      let left;
      let right;
      let tempMax = '';
      //Check if its even or odd index
      //if a whole index then, check odd -> aba -> start from b
      //temp = b, left = a, right = a
      if (Math.floor(index) === index) {
          left = index - 1;
          right = index + 1;
          tempMax += s[index];
      } else {
        //if number is not whole, then around index up and down
        // abba -> left = b, right = b
          left = Math.floor(index);
          right = Math.ceil(index);
      }

      while(s[left] === s[right] && left >= 0 && right < s.length) {
          tempMax = s[left] + tempMax + s[right];
          left--;
          right++;
      };

      if (tempMax.length > longestStr.length) {
          longestStr = tempMax;
      }

      index += 0.5;
      tempMax = '';
  }
  return longestStr;
};

