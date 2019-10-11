const getMaximumGold = require('../1219. Path with Maximum Gold') ;

describe('getMaximumGold -> Return the maximum amount of gold you can collect.', () => {
  it ('grid = [[0,6,0],[5,8,7],[0,9,0]]', () => {
    const output = 24;
    const result = getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]);
    expect(result).toEqual(output);
  });

  it('grid = [[0,6,0],[5,8,7],[0,9,0],[4,6,7],[3,8,9]]', () => {
    const output = 61;
    const result = getMaximumGold([2,4,6]);
    expect(result).toEqual(output);
  });

  it('grid = [[0,6,0],[5,8,7],[0,0,0],[4,6,7]]', () => {
    const output = 21;
    const result = getMaximumGold([[0,6,0],[5,8,7],[0,0,0],[4,6,7]]);
    expect(result).toEqual(output);
  });
});
