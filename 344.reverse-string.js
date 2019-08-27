/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//Two Pointers, one from the start, one from the end
//Swap start and end chars while iterating
class Solution {
  private int start;
  private int end;
  public void reverseString(char[] s) {
      start = 0;
      end = s.length - 1;
      while ( start < end ) {
          char c = s[start];
          s[start] = s[end];
          s[end] = c;
          start++;
          end--;
      }
      return;
  }
}

