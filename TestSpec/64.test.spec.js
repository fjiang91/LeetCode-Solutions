const minPathSum = require('../64.minimum-path-sum');

describe('minPathSum -> Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.', () => {
  it ('grid = [[1,4,1],[1,3,1],[1,5,1]]', () => {
    const output = 7;
    const result = minPathSum([[1,4,1],[1,3,1],[1,5,1]]);
    expect(result).toEqual(output);
  });

  it('grid = [[1]]', () => {
    const output = 1;
    const result = minPathSum([[1]]);
    expect(result).toEqual(output);
  });

  it('grid = [[1,3,1],[1,5,1],[4,2,1],[4,2,5],[5,3,7],[4,2,6]]', () => {
    const output = 21;
    const result = minPathSum([[1,3,1],[1,5,1],[4,2,1],[4,2,5],[5,3,7],[4,2,6]]);
    expect(result).toEqual(output);
  });
});
