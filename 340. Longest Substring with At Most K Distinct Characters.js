/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let maxLen = 0;
  let sMap = {};
  let left = 0;
  let right = 0;

  while (right < s.length) {
      let char = s[right];
      if ( !sMap[char] || sMap[char] <= 0 ) {
          k--;
      };
      sMap[char] = ( sMap[char] || 0 ) + 1
      if (k >= 0) maxLen = Math.max(right - left + 1, maxLen);
      while( k < 0 ) {
          let leftChar = s[left];
          sMap[leftChar]--;
          if (sMap[leftChar] === 0) k++;
          left++;
      };
      right++
  };
  return maxLen
};

module.exports = lengthOfLongestSubstringKDistinct;
