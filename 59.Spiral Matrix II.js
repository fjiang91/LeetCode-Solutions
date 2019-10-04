var generateMatrix = function(n) {
    let numLen = n * n
    let top = 0;
    let right = n - 1;
    let bottom = n - 1;
    let left = 0;
    let num = 1;
    let res = [];
    for (let i = 0; i < n; i++){
        res[i] = new Array(n).fill(0);
    }
    //Keep a top, left, right, bottom counter for 4 edges.
    //Shrink the edges each time we complete with a row/col
    //Top Left to Top Right
    //Top Right to Bottom Right
    //Bottom Right to Bottom Left
    //Bottom Left to Top Left
    //Repeat above process
    while ( num <= numLen ) {
        for (let i = left; i <= right; i++){
            res[top][i] = num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            res[i][right] = num++;
            
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res[bottom][i] = num++;
            }
        }
        bottom--;
        
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res[i][left] = num++;
            }
        }
        left++;
    };
    
    return res;
};

module.exports = generateMatrix;