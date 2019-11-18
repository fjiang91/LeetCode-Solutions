var expand = function(S) {
  let chars = generatePossibleArray(S);

  let res = helper(chars, [], 0, [], S.length);

  res.sort((a, b) => a.localeCompare(b));
  return res;
};

//Helper function to find current possible combination and backtrack if there's more than one possibility
function helper(chars, res, index, curr, maxChar) {
  if (curr.length === maxChar) {
    res.push(curr.join(''));
    return;
  }

  if (typeof chars[index] !== 'object') {
    helper(chars, res, index + 1, curr.concat(chars[index]), maxChar);
  } else {
    for (let i = 0; i < chars[index].length; i++) {
      let c = chars[index][i];
      curr.push(c);
      helper(chars, res, index + 1, curr, maxChar);
      curr.pop();
    }
  }

  return res;
}

//Split S into an array based on {}
//a{b,c,d}e{f,g} -> [a,[b,c,d],e,[f,g]]
function generatePossibleArray(S) {
  let chars = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '{') chars.push(S[i]);
    else {
      let perm = '';
      while (i < S.length && S[++i] !== '}') {
        perm += S[i];
      }
      chars.push(perm.split(','));
    }
  }

  return chars;
}

module.exports = expand;
