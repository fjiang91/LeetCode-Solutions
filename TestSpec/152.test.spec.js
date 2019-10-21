const maxProduct = require('../152.maximum-product-subarray');

describe('maxProduct -> Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.', () => {
  it ("nums = [1,2,3,4]", () => {
    const output = 24;
    const result = maxProduct([1,2,3,4]);
    expect(result).toEqual(output);
  });

  it("nums = [1,-2,3,-4]", () => {
    const output = 24;
    const result = maxProduct([1,-2,3,-4]);
    expect(result).toEqual(output);
  });

  it("nums = [1,-2,0,3,-4]", () => {
    const output = 3;
    const result = maxProduct([1,-2,0,3,-4]);
    expect(result).toEqual(output);
  });
});
