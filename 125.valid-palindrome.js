/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
//Two Pointer - Left = 0, Right = s.length - 1
//Regex to check for any chars and numbers
//Keep inreasing left or decrease right to ignore other non nums/chars
var isPalindrome = function(s) {
  if(!s.length) return true;

  let left = 0;
  let right = s.length - 1;
  let alphaRegex = /[a-zA-Z0-9]/gi;
  while(left < right) {
      while(!s[left].match(alphaRegex) && left < right) left++;
      while(!s[right].match(alphaRegex) && left < right) right--;
      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
      left++;
      right--;
  }
  return true;
};

