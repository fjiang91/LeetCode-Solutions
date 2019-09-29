/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  combineHelper(res, 1, n, k, []);
  return res;
};

function combineHelper (res, currN, n, k, currCombine) {
  if (currCombine.length === k) {
      res.push([...currCombine]);
      return;
  }

  for (let num = currN; num <= n; num++){
      currCombine.push(num);
      combineHelper(res, num + 1, n, k, currCombine);
      currCombine.pop();
  }

  return;
};

module.exports = combine;
