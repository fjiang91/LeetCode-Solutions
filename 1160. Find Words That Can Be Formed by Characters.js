/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
//Create hashMap for all chars and then use a helper function
//to check each word
var countCharacters = function(words, chars) {
    let wordMap = {};
    for (let i = 0; i < chars.length; i++){
        let currChar = chars[i]
        wordMap[currChar] = (wordMap[currChar] || 0) + 1;
    }

    let validWords = 0;
    for (let i = 0; i < words.length; i++){
        let valid = checkWord(words[i], wordMap);
        if (valid) validWords += words[i].length
    }

    return validWords;
};

const checkWord = (word, wordMap) => {
    let currWordMap = {};
    for (let j = 0; j < word.length; j++){
        let currChar = word[j];
        if (!wordMap.hasOwnProperty(currChar)) {
            return false;
        }
        currWordMap[currChar] = (currWordMap[currChar] || 0) + 1;
        if (currWordMap[currChar] > wordMap[currChar]) return false;
    }
    return true;
};
