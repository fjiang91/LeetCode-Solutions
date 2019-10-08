/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function(s, dict) {
  if(!dict.length) return s;
  let boldBoolean = new Array(s.length).fill(false);
  let currEnd = 0;
  for (let i = 0; i < s.length; i++){
      for (let j = 0; j < dict.length; j++){
          let word = dict[j];
          if (s.startsWith(word,i)) {
              currEnd = Math.max(currEnd, i + word.length);
          };
      }
      boldBoolean[i] = currEnd > i
  };

  let currIndex = 0;
  let newString = '';

  while (currIndex < s.length) {
      while(boldBoolean[currIndex] === false) {
          newString += s[currIndex++];
      }
      if (currIndex >= s.length) break;
      newString += '<b>';
      let startBold = currIndex;
      while (boldBoolean[currIndex] === true) currIndex++;
      newString += s.slice(startBold, currIndex);
      newString += '</b>';
  };

  return newString;
};

module.exports = addBoldTag;
