/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 */
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
//Use two pointer to keep track of which two intervals to compare
//Take the maximum of the first value and the minimum of the second value
//Make sure first value <= second value or else interval not possible
//Move the pointer of the small second value
var intervalIntersection = function(A, B) {
  if(!A.length || !B.length) return [];
  let res = [];
  let aP = 0;
  let bP = 0;

  while (aP < A.length && bP < B.length){
      let maxFirst = Math.max(A[aP][0], B[bP][0]);
      let minSecond = Math.min(A[aP][1], B[bP][1]);
      if (maxFirst <= minSecond) {
          res.push([maxFirst, minSecond]);
      }

      let aSecondNum = A[aP][1];
      let bSecondNum = B[bP][1];
      if (aSecondNum < bSecondNum) {
          aP++;
      } else {
          bP++;
      }
  }

  return res;
};

