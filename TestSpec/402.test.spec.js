const removeKdigits = require('../402.remove-k-digits');

describe('removeKdigits -> Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.', () => {
  it ("num = '19378655959', k = 2", () => {
    const output = '137655959';
    const result = removeKdigits('19378655959', 2);
    expect(result).toEqual(output);
  });

  it("num = '5555', k = 2", () => {
    const output = '55';
    const result = removeKdigits('5555', 2);
    expect(result).toEqual(output);
  });

  it("num = '90005959', k = 1", () => {
    const output = '5959';
    const result = removeKdigits('90005959', 1);
    expect(result).toEqual(output);
  });
});
