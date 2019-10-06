const minCostToMoveChips = require('../1217. Play with Chips') ;

describe('minCostToMoveChips -> Return the minimum cost needed to move all the chips to the same position (any position).', () => {
  it ('chips = [2,3,4]', () => {
    const output = 1;
    const result = minCostToMoveChips([2,3,4]);
    expect(result).toEqual(output);
  });

  it('chips = [2,4,6]', () => {
    const output = 0;
    const result = minCostToMoveChips([2,4,6]);
    expect(result).toEqual(output);
  });

  it('chips = [2,2,2,5,5]', () => {
    const output = 2;
    const result = minCostToMoveChips([2,2,2,5,5]);
    expect(result).toEqual(output);
  });
});
