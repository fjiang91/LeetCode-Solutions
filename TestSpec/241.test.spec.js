const diffWaysToCompute = require('../241.different-ways-to-add-parentheses') ;

describe('diffWaysToCompute -> return an array of different ways to group numbers and operators', () => {
  it ('2-2+3', () => {
    const output = [-3, 3];
    const result = diffWaysToCompute("2-2+3");
    expect(result).toEqual(output);
  });

  it('2-2+3', () => {
    const output = [-3, 3];
    const result = diffWaysToCompute("2-2+3");
    expect(result).toEqual(output);
  });

  it('2-4+3*1', () => {
    const output = [-5,-5,1,-5,1];
    const result = diffWaysToCompute("2-4+3*1");
    expect(result).toEqual(output);
  });

  it('123', () => {
    const output = [123];
    const result = diffWaysToCompute("123");
    expect(result).toEqual(output);
  });
});
