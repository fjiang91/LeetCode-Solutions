var balancedStringSplit = function(s) {
  if (s.length % 2 !== 0) return 0;

  let l = 0;
  let r = 0;

  let count = 0;
  let i = 0;

  while( i < s.length ) {
      while ( (l === 0 && r === 0) || (l !== r && i < s.length)) {
          let char = s[i++];
          if (char === 'L') l++;
          else r++;
      };
      l = 0;
      r = 0;
      count++;
  };

  return count;
};

module.exports = balancedStringSplit;
