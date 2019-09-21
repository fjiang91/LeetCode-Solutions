/**
 * @param {number[][]} mat
 * @return {number}
 */

/*
* O(n * m) -> Time Complexity
* O(n) -> Space Complexity -> HashMap
* Approach -> Two Approaches
* 1. If the nums are all distinct. Keep track of how many times a number occur within the whole array
* If the same number occur as many times as the arr length, then it must be the smallest most common
* 2. Use a hashMap with key -> array index and value as another hashMap
* Check if the current number exist within all indexes hashMa
* Edge Case / Questions to Ask
* 1. Are the numbers unique? Will we expecting duplicate?
* 2. Is the array sorted?
*/

var smallestCommonElement = function(mat) {
  let numMap = {};
  for (let i = 0; i < mat.length; i++){
      let currSet = mat[i];
      for (let j = 0; j < mat[i].length; j++){
          let num = currSet[j];
          numMap[num] = (numMap[num] || 0 ) + 1;
          if (numMap[num] === mat.length) return num;
      }
  }
  return -1;
};

/**
 * Approach 2
 */
var smallestCommonElement = function(mat) {
  let numMap = {};
  for (let i = 1; i < mat.length; i++){
      numMap[i] = {};
      for (let j = 0; j < mat[i].length; j++){
          let currNum = mat[i][j];
          numMap[i][currNum] = true;
      }
  }

  for (let i = 0 ; i < mat[0].length; i++){
      let matZeroNum = mat[0][i];
      let status = true;
      for (let j = 1; j < mat.length; j++){
          let currNumMap = numMap[j];
          if (!currNumMap.hasOwnProperty(matZeroNum)){
              status = false;
              break;
          }
      };
      if (status) {
          return matZeroNum;
      }
  }

  return -1
};
