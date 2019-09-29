const equalSubString = require('../1208. Get Equal Substrings Within Budget');

describe('equalSubstring -> Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of twith a cost less than or equal to maxCost.', () => {
  it ("s = 'defg', t = 'efgh' , maxCost = 2", () => {
    const output = 2;
    const result = equalSubString('defg', 'efgh', 2);
    expect(result).toEqual(output);
  });

  it("s = 'wdfweg', t = 'wfirgh' , maxCost = 2", () => {
    const output = 2;
    const result = equalSubString('wdfweg', 'wfirgh', 2);
    expect(result).toEqual(output);
  });

  it("s = 'defg', k = 'dehh' , maxCost = 0", () => {
    const output = 2;
    const result = equalSubString('defg', 'dehh', 0);
    expect(result).toEqual(output);
  });
});
