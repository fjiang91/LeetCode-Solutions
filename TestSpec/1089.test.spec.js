const duplicateZeros = require('../1089. Duplicate Zeros');

describe('duplicateZeros -> Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.', () => {
  it ("arr = [1，0，2]", () => {
    const input = [1,0,2];
    const output = [1,0,0];
    duplicateZeros(input);
    expect(input).toEqual(output);
  });

  it("arr = [1,3,5,7,9]", () => {
    const input = [1,3,5,7,9];
    const output = [1,3,5,7,9];
    duplicateZeros(input);
    expect(input).toEqual(output);
  });

  it("arr = [1,0,0,3,5,7,0,9,0]", () => {
    const input = [1,0,0,3,5,7,0,9,0];
    const output = [1,0,0,0,0,3,5,7,0];
    duplicateZeros(input);
    expect(input).toEqual(output);
  });
});
