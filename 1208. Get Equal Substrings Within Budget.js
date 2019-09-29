var equalSubstring = function(s, t, maxCost) {
  let maxCount = 0;
  let tempCost = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
      let sCode = s.charCodeAt(right);
      let tCode = t.charCodeAt(right);
      tempCost += Math.abs(sCode - tCode);
      if (tempCost <= maxCost) maxCount = Math.max(right - left + 1, maxCount);
      while (tempCost > maxCost) {
          let sCodeLeft = s.charCodeAt(left);
          let tCodeLeft = t.charCodeAt(left);
          tempCost -= Math.abs(sCodeLeft - tCodeLeft);
          left++;
      };
      right++;
  }

  return maxCount
};

module.exports = equalSubstring;
