/*
 * @lc app=leetcode id=398 lang=javascript
 *
 * [398] Random Pick Index
 */
/**
 * @param {number[]} nums
 */

 /*
* O(1) -> Time Complexity - pick function
* O(n) -> Time Complexity - constructor
* O(n) -> Space Complexity -> hashMap -> arr to keep their index
* Approach -> Create a hashMap with key -> num, value -> array of indexes
* Pick function -> creates random index from 0 to numsArr.legth
* Edge Case / Questions to Ask
* 1.
*/

const constructSolution = (nums, numMap) => {

  for (let i = 0; i < nums.length; i++){
      let num = nums[i];
      if(numMap.has(num)) {
          numMap.set(num, numMap.get(num).concat(i));
      } else {
          numMap.set(num, [i]);
      }
  };
};

var Solution = function(nums) {
  this.numMap = new Map();
  constructSolution(nums, this.numMap);
};

/**
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let numArr = this.numMap.get(target);
  let randomIndex = Math.floor(Math.random() * numArr.length)
  return numArr[randomIndex];
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

