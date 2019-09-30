const lengthOfLongestSubstringKDistinct = require('../340. Longest Substring with At Most K Distinct Characters');

describe('Longest SubString with At Most K Distinct Characters -> Return the max length of unique characters within s that is less than or equal to k.', () => {
  it ("s = 'aceabba', k = 2", () => {
    const output = 4;
    const result = lengthOfLongestSubstringKDistinct("aceabba", 2);
    expect(result).toEqual(output);
  });

  it("s = 'a', k = 2" , () => {
    const output = 1;
    const result = lengthOfLongestSubstringKDistinct('a',2);
    expect(result).toEqual(output);
  });

  it("s = 'ccefgeeettyw', k = 3", () => {
    const output = 6;
    const result = lengthOfLongestSubstringKDistinct('ccefgeeettyw', 3);
    expect(result).toEqual(output);
  });
});
