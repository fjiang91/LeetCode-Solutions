const cutOffTree = require('../675.cut-off-trees-for-golf-event') ;

describe('cutOffTree -> Return the minimum number of steps to cut all trees', () => {
  it ('forest = [[10,6,0],[5,8,7],[0,9,0]]', () => {
    const output = 10;
    const result = cutOffTree([[10,6,0],[5,8,7],[0,9,0]]);
    expect(result).toEqual(output);
  });

  it('forest = [[10,6,17],[5,8,7],[0,9,0],[11,15,0]]', () => {
    const output = 20;
    const result = cutOffTree([[10,6,17],[5,8,7],[0,9,0],[11,15,0]]);
    expect(result).toEqual(output);
  });

  it('forest = [[10,6,17],[5,8,7],[0,0,0],[11,15,0]]', () => {
    const output = -1;
    const result = cutOffTree([[10,6,17],[5,8,7],[0,0,0],[11,15,0]]);
    expect(result).toEqual(output);
  });
});
