/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
/*
* O(n) -> Time Complexity on average
* O(n) -> Space Complexity -> map to keep track of found
* Approach -> Keep a left and right pointer with a hashMap
* Increase right side until we found a duplicate
* Increase the left side until we remove the duplicate value of the right
* Check the maxLen when we found a non duplicate right side
* Edge Case / Questions to Ask
* 1. What if the string be empty?
* 2. Will the answer len be continous substr?
*/
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    //Keep a hashMap for all the found chars
    const foundMap = {};
    let left = 0;
    let right = 0;
    let maxLen = 0;

    //Keep increase the right side until we hit the end of array
    while(right < s.length) {
        let char = s[right];
        //If right char is not found, then its not a duplicate
        //Check the new len and increase right
        if (!foundMap[char]) {
            foundMap[char] = true;
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        //Keep increasing left side until we dont see the right char anymore
        while(foundMap[char]) {
            delete foundMap[s[left]];
            left++;
        }
    };

    return maxLen;
};
