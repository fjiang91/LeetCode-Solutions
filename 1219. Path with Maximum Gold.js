var getMaximumGold = function(grid) {
    let maxGold = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] !== 0) {
                maxGold = Math.max(maxGold, goldHelper(grid, row, col, 0))
            }
        }
    }
    
    return maxGold
};

function goldHelper (grid, row, col, currGold) {
    let cell = row + '-' + col;
    if (row >= grid.length || row < 0 || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
        return currGold;
    }
    
    let newGold = grid[row][col] + currGold
    let temp = grid[row][col]
    grid[row][col] = 0;
    
    let left = goldHelper(grid, row, col - 1, newGold);
    let right = goldHelper(grid, row, col + 1, newGold);
    let top = goldHelper(grid, row - 1, col, newGold);
    let bottom = goldHelper(grid, row + 1, col, newGold);
    
    grid[row][col] = temp

    return Math.max(left, right, top, bottom);
};

module.exports = getMaximumGold;