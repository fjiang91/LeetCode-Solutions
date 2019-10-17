const addStrings = require('../415.add-strings');

describe('addStrings -> Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.', () => {
  it ("nums1 = '321' nums2 = '415'", () => {
    const output = "736";
    const result = addStrings('321', '415');
    expect(result).toEqual(output);
  });

  it("nums1 = '35436' nums2 = '73456'" , () => {
    const output = "108892";
    const result = addStrings('35436','73456');
    expect(result).toEqual(output);
  });

  it("nums1 = '43435436' nums2 = '3373456'", () => {
    const output = "46808892";
    const result = addStrings('43435436','3373456');
    expect(result).toEqual(output);
  });
});
