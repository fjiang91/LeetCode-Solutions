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
  let left = 0;
  let right = points.length - 1;
  debugger
  while (left <= right) {
      let mid = pivotHelper(points, left, right);
      if (mid === K) break;
      else if (mid > K) right = mid - 1;
      else left = mid + 1;
  };
  return points.slice(0, K)
};

const pivotHelper = (points, left, right) => {
  let pivot = left;
  while(left < right) {
    if (compare(points[pivot], points[right])) {
          left++;
          swap(points, left, right);
      }
      right--;
  }
  swap(points, left, pivot);

  return left;
};

const swap = (arr, i, j) => {
  return [arr[i], arr[j]] = [arr[j], arr[i]]
}

const compare = (p1, p2) => {
  return p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1];
};

kClosest([[1,3],[-2,2]],1)

