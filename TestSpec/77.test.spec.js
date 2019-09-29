const combine = require('../77.combinations');

describe('combine -> return an array with all possible comibinations from 0...n with k size', () => {
  it ('n = 4, k = 3', () => {
    const output = [[1,2,3],[1,2,4],[1,3,4],[2,3,4]];
    const result = combine(4,3);
    expect(result).toEqual(output);
  });

  it('n = 5, k = 3', () => {
    const output = [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]];
    const result = combine(5,3);
    expect(result).toEqual(output);
  });

  it('n = 1, k = 3', () => {
    const output = [];
    const result = combine(1,3);
    expect(result).toEqual(output);
  });

  it('n = 6, k = 3', () => {
    const output = [[1,2,3],[1,2,4],[1,2,5],[1,2,6],[1,3,4],[1,3,5],[1,3,6],[1,4,5],[1,4,6],[1,5,6],[2,3,4],[2,3,5],[2,3,6],[2,4,5],[2,4,6],[2,5,6],[3,4,5],[3,4,6],[3,5,6],[4,5,6]];
    const result = combine(6,3);
    expect(result).toEqual(output);
  });
});
