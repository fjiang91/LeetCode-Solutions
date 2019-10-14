const merge = require('../88.merge-sorted-array');

describe('merge -> Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.', () => {
  it ("nums1 = [1,2,3,0,0,0,0], m = 3, nums2 = [2,5,6,7], n = 4", () => {
    const output = [1,2,2,3,5,6,7];
    const result = merge([1,2,3,0,0,0,0], 3, [2,5,6,7], 4);
    expect(result).toEqual(output);
  });

  it("nums1 = [2,0], m = 1, nums2 = [1], n = 1", () => {
    const output = [1,2];
    const result = merge([2,0], 1, [1], 1);
    expect(result).toEqual(output);
  });

  it("nums1 = [2,3,4,5,0,0], m = 4, nums2 = [1,7], n = 2", () => {
    const output = [1,2,3,4,5,7];
    const result = merge([2,3,4,5,0,0], 4, [1,7], 2);
    expect(result).toEqual(output);
  });
});
