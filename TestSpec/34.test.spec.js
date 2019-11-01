const searchRange = require('../34.find-first-and-last-position-of-element-in-sorted-array');

describe('searchRange -> Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.', () => {
  it ('array = [1,1], target = 1', () => {
    const output = [0,1];
    const result = searchRange([1,1], 1);
    expect(result).toEqual(output);
  });

  it('array = [0,1,2,3,4,4,5,5,6], target = 4', () => {
    const output = [4,5];
    const result = searchRange([0,1,2,3,4,4,5,5,6],4);
    expect(result).toEqual(output);
  });

  it('array = [8,8,8,8,8,8], target = 8', () => {
    const output = [0,5];
    const result = searchRange([8,8,8,8,8,8], 8);
    expect(result).toEqual(output);
  });
});
