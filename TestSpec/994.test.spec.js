const orangesRotting = require('../994. Rotting Oranges');

describe('orangesRotting -> Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.', () => {
  it ("grid = [[1,2]]", () => {
    const output = 1;
    const result = orangesRotting([[1,2]]);
    expect(result).toEqual(output);
  });

  it("grid = [[2,1,1],[0,1,1],[1,0,1]]" , () => {
    const output = -1;
    const result = orangesRotting([[2,1,1],[0,1,1],[1,0,1]]);
    expect(result).toEqual(output);
  });

  it("[[2,1,1],[0,1,1],[1,1,1]]", () => {
    const output = 4;
    const result = orangesRotting([[2,1,1],[0,1,1],[1,1,1]]);
    expect(result).toEqual(output);
  });
});
