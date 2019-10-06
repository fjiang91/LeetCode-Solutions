var minCostToMoveChips = function(chips) {
    let even = 0;
    let odd = 0;
    
    for (let i = 0; i < chips.length; i++){
        if (chips[i] % 2 === 0) even++;
        else odd++
    }
    
    return Math.min(even, odd);
};

// var minCostToMoveChips = function(chips) {
//     let map = {};
//     for (let i = 0; i < chips.length; i++){
//         map[chips[i]] = (map[chips[i]] || 0) + 1;
//     }
//     let uniqueChips = Object.keys(map);
//     let minCount = Number.MAX_SAFE_INTEGER;
    
//     for (let i = 0; i < uniqueChips.length; i++){
//         let currMin = 0;
//         let currNum = Number(uniqueChips[i]);
//         for (let j = 0; j < uniqueChips.length; j++){
//             let compareNum = Number(uniqueChips[j])
//             let diff = Math.abs(currNum - compareNum)
//             if (i !== j && diff % 2 === 1) {
//                 currMin += map[compareNum];
//             };
//         }
//         minCount = Math.min(minCount, currMin);
//     }
    
//     return minCount === Number.MAX_SAFE_INTEGER ? 0 : minCount;
// };

module.exports = minCostToMoveChips;