const canJump = require('../55.jump-game');

describe('canJump -> Given an array of non-negative integers, you are initially positioned at the first index of the array.', () => {
  it ("nums = [2,3,1,2,1,3,1,4]", () => {
    const output = true;
    const result = canJump([2,3,1,2,1,3,1,4]);
    expect(result).toEqual(output);
  });

  it("nums = [2,3,1,2,0,0,1,3,1,4]" , () => {
    const output = false;
    const result = canJump([2,3,1,2,0,0,1,3,1,4]);
    expect(result).toEqual(output);
  });

  it("nums = [0]", () => {
    const output = true;
    const result = canJump([0]);
    expect(result).toEqual(output);
  });
});
