/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordMap = {};
    //Create a hasmap of all of the words for reference/mark word as visited
    for (let i = 0; i < wordList.length; i++){
        wordMap[wordList[i]] = true;
    }

    if(!wordMap[endWord]) return 0;

    //Perform a BFS search on the queue and search level by level
    //Delete each node after visiting it
    let queue = [[beginWord, 1]];
    while (queue.length) {
        let w = queue.shift();
        let word = w[0];
        let length = w[1];
        delete wordMap[word];
        //Return length if word is found
        if (word === endWord) return length;
        for (let i = 0; i < word.length; i++){
            //Change the current index with char from a-z
            //Hot -> aot || bot || zot || hat |\ ...
            let left = word.slice(0, i);
            let right = word.slice(i + 1);
            for (let i = 97; i <= 122; i++) {
                    let char = String.fromCharCode(i);
                    let newWord = left + char + right;
                    //Check if word is within our hashMap
                    if (wordMap.hasOwnProperty(newWord) && wordMap[newWord]){
                        queue.push([newWord, length + 1])
                    }
            }
        }
    };

    return 0;
};
