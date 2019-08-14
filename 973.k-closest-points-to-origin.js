/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
//Sort the points based on their points by
//Squaring each index and adding them together
var kClosest = function(points, K) {
  let newPoints = points.sort( (a,b) => {
      let aPoint = a[0] * a[0] + a[1] * a[1];
      let bPoint = b[0] * b[0] + b[1] * b[1];
      return aPoint - bPoint;
  })
  return newPoints.slice(0, K);
};

