/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

  /*
* O(n) -> Time Complexity -> Sliding window of k
* O(1) -> Space Complexity -> Constant variables
* Approach -> First construct a sliding window of k
* Remove first value in sliding window
* Add the next i value at the end of the sliding window
* Check the new computed sum for conditions
* Edge Case / Questions to Ask
* 1.
*/

var dietPlanPerformance = function(calories, k, lower, upper) {
  let points = 0;
  let tempPoint = 0;
  for (let i = 0; i < k; i++){
      tempPoint += calories[i];
  };
  if (tempPoint < lower ) points--;
  else if (tempPoint > upper) points++;

  for (let i = k; i < calories.length; i++) {
      tempPoint -= calories[i - k];
      tempPoint += calories[i];
      if (tempPoint < lower) points--;
      if (tempPoint > upper) points++;
  };
  return points;
};
