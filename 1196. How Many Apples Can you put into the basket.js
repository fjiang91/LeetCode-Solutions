/**
 * @param {number[]} arr
 * @return {number}
 */

 /*
* O(n log n) -> Time Complexity -> due to sorting
* O(1) -> Space Complexity
* Approach -> Sort the array and keep track of sum until it adds up until 5000 stated by the problem
* We only that we can achieve the maximum count, if we only add up small weights first
* Edge Case / Questions to Ask
* 1.
*/

var maxNumberOfApples = function(arr) {
  arr = arr.sort( (a,b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (sum + arr[i] <= 5000){
        sum += arr[i];
        count++;
    };
  };

  return count;
};
