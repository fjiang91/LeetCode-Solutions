/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
 * O(n log n) -> Time Complexity -> For Loop and Inner Sort
 * O(n) -> HashMap to keep sortedWord
 * Approach -> We know that two words are anagram if they have exactlly the same number of characters
 * Edge Case / Questions to Ask
 * 1. Str is empty -> What should be return?
 * 2. Is there numbers within the word?
 * 3. Is the words only lower case?
 * 4. Does return ordering matter?
 * With that in mind, then we can just sort each individual word and check if the sorted version of the word is within our hashmap, if it is, then push it to the sortedWord map
 */
var groupAnagrams = function(strs) {
  //Create a hashmap of the sortedWords
  let hashMap = {};

  for (let i = 0; i < strs.length; i++){
      const word = strs[i];
      //Sort characters within the word in alphlabetical order -> eat -> aet
      const sortedWord = word.split("").sort().join('');
      if(hashMap.hasOwnProperty(sortedWord)) {
          hashMap[sortedWord].push(word);
      } else {
          hashMap[sortedWord] = [word];
      }
  };

  return Object.values(hashMap);
};

