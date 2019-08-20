/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
//Create a hashmap for the frequency of each word
//Sort the hashmap by the values and return the first k elements decreasingly
//Run Time - O(n log n)
//Will try and implement maxHeap to reduce time complexitiy to O(n log k)
var topKFrequent = function(words, k) {
  let map = {};

  for (let i = 0; i < words.length; i++){
      map[words[i]] =  (map[words[i]] || 0) + 1;
  }

  return Object.keys(map).sort( (a,b) => {
      if( map[a] === map[b]) {
          return a.localeCompare(b)
      }
      return map[b] - map[a];
  }).slice(0, k)

};

