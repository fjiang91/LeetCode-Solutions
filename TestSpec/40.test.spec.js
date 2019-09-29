const combinationSum2 = require('../40.combination-sum-ii');

describe('combinationSum2 -> return an array of array with values sum up to target', () => {
  it ('array = [3,1,2,1], target = 4', () => {
    const output = [[1,1,2],[1,3]];
    const result = combinationSum2([3,1,2,1],4);
    expect(result).toEqual(output);
  });

  it('array = [3,1,2,1,6,2,3,4,5,7,1], k = 4', () => {
    const output = [[1,1,2],[1,3],[2,2],[4]];
    const result = combinationSum2([3,1,2,1,6,2,3,4,5,7,1],4);
    expect(result).toEqual(output);
  });

  it('array = [3,1,2,1,6,2,3,4,5,7], k = 8', () => {
    const output = [[1,1,2,4],[1,1,3,3],[1,1,6],[1,2,2,3],[1,2,5],[1,3,4],[1,7],[2,2,4],[2,3,3],[2,6],[3,5]];
    const result = combinationSum2([3,1,2,1,6,2,3,4,5,7], 8);
    expect(result).toEqual(output);
  });
});
