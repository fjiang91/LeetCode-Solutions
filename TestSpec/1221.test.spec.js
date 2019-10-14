const balancedStringSplit = require('../1221. Split a String in Balanced Strings') ;

describe('balancedStringSplit -> Return the maximum amount of splitted balanced strings.', () => {
  it ("s = 'RLRRLLRL'", () => {
    const output = 3;
    const result = balancedStringSplit('RLRRLLRL');
    expect(result).toEqual(output);
  });

  it("s = 'RL'", () => {
    const output = 1;
    const result = balancedStringSplit('RL');
    expect(result).toEqual(output);
  });

  it("s = 'RLRRRLLLRLRL'", () => {
    const output = 4;
    const result = balancedStringSplit('RLRRRLLLRLRL');
    expect(result).toEqual(output);
  });
});
