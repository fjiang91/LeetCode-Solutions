/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

 /*
* O() -> Time Complexity
* O(n) -> Space Complexity -> queue
* Approach -> Use BFS to keep track of minimum step
* Try each of the 8 combinations with a BFS, the first to achieve the step will be the minimum step
* Use a hashMap to keep track of previous move
* Edge Case / Questions to Ask
* 1. Will an answer always be valid?
*/

var minKnightMoves = function(x, y) {
    let queue = [[0,0,0]];
    let prevMove = {};

    while(queue.length > 0){
        let curr = queue.shift();
        let currX = curr[0];
        let currY = curr[1];
        let currStep = curr[2];
        let currPos = currX + '-' + currY
        if ((currX + currY > 300 ) || (currX + currY < -300) || prevMove.hasOwnProperty(currPos)) continue;
        prevMove[currPos] = true;
        if (currX === x && currY === y) return currStep;

        queue.push([currX - 2, currY + 1, currStep + 1]);
        queue.push([currX - 1, currY + 2, currStep + 1]);

        queue.push([currX + 1, currY + 2, currStep + 1]);
        queue.push([currX + 2, currY + 1, currStep + 1]);

        queue.push([currX - 2, currY - 1, currStep + 1]);
        queue.push([currX - 1, currY - 2, currStep + 1]);

        queue.push([currX + 1, currY - 2, currStep + 1]);
        queue.push([currX + 2, currY - 1, currStep + 1]);
    };
    return -1;
};
