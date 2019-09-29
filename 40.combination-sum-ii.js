/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  candidates = candidates.sort( (a,b) => a - b)
  combineHelper(res, candidates, [], 0, target)
  return res;
};

function combineHelper (res, numArr, currComb, startIdx, target) {
  if (target < 0) return;
  if (target === 0) {
      res.push([...currComb]);
      return;
  }

  for (let i = startIdx; i < numArr.length; i++) {
      let num = parseInt(numArr[i]);
      currComb.push(num)
      combineHelper(res, numArr, currComb, i + 1 , target - num);
      currComb.pop();
      while(numArr[i] === numArr[i + 1]) i++;
  };

  return;
};

module.exports = combinationSum2;

