const MyCircularQueue = require('../622.design-circular-queue');

describe('Design your implementation of the circular queue based on FIFO ( First In First Out )', () => {
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
