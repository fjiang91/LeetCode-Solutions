var orangesRotting = function(grid) {
    let queue = [];
    let maxMin = 0;
    //Keep track of fresh oranges we have
    let freshOrange = 0
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === 2) {
                queue.push([row, col, 0])
            }
            if (grid[row][col] === 1) freshOrange++;
        }
    }

    while(queue.length) {
        let [row, col, currMin] = queue.shift();
        //If this is a fresh orange, rotten it, reduce orange count, and check maxIn
        if (grid[row][col] === 1) {
            maxMin = Math.max(maxMin, currMin);
            freshOrange--;
            grid[row][col] = 2;
        } 
        
        if (row -1 >= 0 && grid[row - 1][col] === 1) queue.push([row - 1, col, currMin + 1])
        if (row + 1 < grid.length && grid[row+1][col] === 1) queue.push([row + 1, col, currMin + 1])

        if (col - 1 >= 0 && grid[row][col-1] === 1) queue.push([row, col - 1, currMin + 1])
        if (col + 1 < grid[0].length && grid[row][col+1] === 1) queue.push([row, col + 1, currMin + 1])
    }
    
    //Check if we have leftover oranges, if so, then rottening all oranges is not possible
    return freshOrange === 0 ? maxMin : -1;
};

module.exports = orangesRotting;