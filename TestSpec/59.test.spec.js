const generateMatrix = require('../59.Spiral Matrix II');

describe('generateMatrix -> Generate a square matrix filled with elements from 1 to n2 in spiral order.', () => {
  it ("n = 1", () => {
    const output = [[1]];
    const result = generateMatrix(1);
    expect(result).toEqual(output);
  });

  it("n = 2" , () => {
    const output = [[1,2],[4,3]];
    const result = generateMatrix(2);
    expect(result).toEqual(output);
  });

  it("n = 3", () => {
    const output =  [[1,2,3],[8,9,4],[7,6,5]];
    const result = generateMatrix(3);
    expect(result).toEqual(output);
  });
});
