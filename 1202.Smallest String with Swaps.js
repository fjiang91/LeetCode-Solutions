/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */

 /*
* O(n ^ 2?) -> Time Complexity
* O(n) ->
* Approach -> Since we need to return the lexicographically smallest string, after infinite swaps possible
* We know that we can swap (0,1) (1,2) -> (0,1,2) -> we can swap any indexs that overlay (union) each other
* Group the pairs together by DFS
* Get the index for that pair, and sort the chars for all the index
* Replace the original str accordingly
* Edge Case / Questions to Ask
* 1. What if the string be empty?
*/
var smallestStringWithSwaps = function(s, pairs) {
    let arrMap = {};
    for (let i = 0; i < pairs.length; i++){
        let pair = pairs[i];
        let one = pair[0]
        let two = pair[1]
        if (!arrMap[one]) arrMap[one] = []
        if (!arrMap[two]) arrMap[two] = [];
        arrMap[one].push(two);
        arrMap[two].push(one)
    };

    let pairArr = [];
    let foundPair = {};
    for (let num in arrMap){
        if (!foundPair[num]) {
            let currPair = [];
            unionPair(arrMap, pairArr, currPair, num, foundPair)
            pairArr.push(currPair);
        }
    };

    let sStr = s.split("");

    for (let i = 0; i < pairArr.length; i++){
        let currPairIndex = pairArr[i];
        currPairIndex = currPairIndex.sort( (a,b) => a - b)

        let currStrPair = [];
        for (let i = 0; i < currPairIndex.length; i++){
            let index = currPairIndex[i];
            currStrPair[i] = sStr[index];
        }
        currStrPair.sort();

        for (let i = 0; i < currStrPair.length; i++){
            let index = currPairIndex[i];
            sStr[index] = currStrPair[i];
        };
    };

    return sStr.join('')
};

function unionPair (arrMap, pairArr, currPair, currNum, foundPair) {
    if(foundPair[currNum]) return;

    let arrMapArr = arrMap[currNum];
    currPair.push(currNum);
    foundPair[currNum] = true;

    for (let i = 0; i < arrMapArr.length; i++) {
        let cNum = arrMapArr[i]
        unionPair(arrMap, pairArr, currPair, cNum, foundPair);
    }

    return;
};
