const addBoldTag = require('../616. Add Bold Tag in String');

describe('addBoldTag -> Return the string with bold tag', () => {
  it ("s = 'aaaefbbcc', dict = ['ae','bbcc'], maxCost = 2", () => {
    const output = "aa<b>ae</b>f<b>bbcc</b>";
    const result = addBoldTag('aaaefbbcc', ["ae","bbcc"]);
    expect(result).toEqual(output);
  });

  it("s = 'aaaabbbb', dict = ['a','b']", () => {
    const output = "<b>aaaabbbb</b>";
    const result = addBoldTag('aaaabbbb', ['a','b']);
    expect(result).toEqual(output);
  });

  it("s = 'aaaabbbb', dict = ['f']", () => {
    const output = "aaaabbbb";
    const result = addBoldTag('aaaabbbb', ['f'] );
    expect(result).toEqual(output);
  });
});
