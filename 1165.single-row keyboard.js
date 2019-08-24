/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
//Use a hashMap to keep track of all of the index for a particular char within keyboard
//Start with a starting index and move it according to the map
//Add their diff into the final count
var calculateTime = function(keyboard, word) {
  const keyBoardMap = {};
  for (let i = 0; i < keyboard.length; i++){
      let char = keyboard[i];
      keyBoardMap[char] = i;
  }
  let index = 0;
  let totalIndex = 0;
  for (let i = 0; i < word.length; i++){
      let currChar = word[i];
      totalIndex += keyBoardMap[currChar] > index ? keyBoardMap[currChar] - index : index - keyBoardMap[currChar];
      index = keyBoardMap[currChar];
  }
  return totalIndex;
};
