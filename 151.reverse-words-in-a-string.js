/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */
/**
 * @param {string} s
 * @return {string}
 */

/*
* O(n  ^ 2) -> Time Complexity -> For loop and slice
* O(n) -> Space Complexity -> Arr
* Approach -> Reverse the entire s first
* Then, reverse each individual characters within a word
* If we see multiple spaces, we simply skip them
* Push the reversed word into a res and return res as a string
* Edge Case / Questions to Ask
* 1. What if the word be empty?
* 2. Will there be extra spaces? In the beginning/end? How about the middle
*/

var reverseWords = function(s) {
  s = s.trim().split('').reverse();
  let res = [];
  let start = 0;
  let end = 0;
  let i = 0;
  while( i < s.length) {
      while(s[i] === ' ' && i < s.length) i++;
      start = i;
      while(s[i] !== ' ' && i < s.length) i++;
      end = i - 1;

      res.push(reverse(s.slice(start, end + 1)))
  }
  return res.join(' ')
};

function reverse(word) {
  let left = 0;
  let right = word.length;
  while(left < right) {
      let temp = word[left];
      word[left] = word[right];
      word[right] = temp;
      left++;
      right--;
  };

  return word.join('');
};

