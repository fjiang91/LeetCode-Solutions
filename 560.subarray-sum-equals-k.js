/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
* O(n) -> Time Complexity -> For Loop
* O(n) -> HashMap to keep sumMap for lookup
* Approach -> We can use a preSum to calculate the sums so far, then we can preSum - k and get remainer. If remainer appears as a preSum in our hashMap, then we know that from remainer + 1, until our current preSum, the difference is k
* With that in mind, also keep a hashMap of the preSum, with the number of times the preSum appear just in case, it appears more than once due to negative values
* Edge Case / Questions to Ask
* 1. Will there be cases there nothing adds up to k, if so what should be returned?
* 2. Is negative values within the array?
* 3. Can the k be negative?
* 4.
*/
var subarraySum = function(nums, k) {
  const sumMap = new Map();
  //Default the sumMap with 0, since the first index can be the target
  sumMap.set(0, 1);

  let preSum = 0;
  let subArrCount = 0;

  for (let i = 0; i < nums.length; i++){
      //Calculate the preSum
      preSum += nums[i];
      //Check if our hashMap have the remainer, if yes, then add the value of the map
      subArrCount += sumMap.has(preSum - k) ? sumMap.get(preSum - k) : 0;
      //Increase the value of the remainer within the hashMap by 1, in case of duplicate preSum due to negative values within the array
      sumMap.set(preSum, (sumMap.get(preSum) || 0) + 1);
  };

  return subArrCount;
};

/**
 * O(n^2) -> Time Complexity -> Two Loops
 * O(1) -> Space Complexity
 * Naive Approach -> Calculate all subset sums
 */
var subarraySum = function(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++){
      let sum = 0;
      for (let j = i; j < nums.length; j++){
          sum += nums[j];
          if (sum === k) count++;
      }
  }

  return count;
};

