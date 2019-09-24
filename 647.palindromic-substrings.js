/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */

/*
* O(n ^ 2) -> Time Complexity -> Since increasing about 0.5 index, and check if palidrome every time
* O(1) -> Space Complexity
* Approach -> Expand around the center approach
* We know a single character is always palidrome, so we increase count when we hit an integer
* Else, we need to check if, left and right side, depending on index, if they're palidrome, if yes, then we found a new pair
* Since, if start/end is different will consider a pair
* Need to increment count everytime we hit a new index
* Edge Case / Questions to Ask
* 1. Will the string contain any other non characters?
* 2. Will there be upper case or lower case?
*/

var countSubstrings = function(s) {
  let i = 0;
  let subCount = 0;

  while( i < s.length ) {
      let left;
      let right;
      if (Math.floor(i) === i) { //Even number
          subCount++;
          left = i - 1;
          right = i + 1;
      } else { //Odd Number
          left = Math.floor(i);
          right = Math.ceil(i);
      }
      while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                subCount++;
                left--;
                right++;
            } else {
                break;
            }
      };
      i += 0.5
  };

  return subCount;
};

