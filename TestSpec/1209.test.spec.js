const removeDuplicates = require('../1209. Remove All Adjacent Duplicates in String II');

describe('removeDuplicates -> Return the final string after all such duplicate removals have been made.', () => {
  it ("s = 'aa', k = 2", () => {
    const output = '';
    const result = removeDuplicates("aa", 2);
    expect(result).toEqual(output);
  });

  it("s = 'aabccbd', k = 2" , () => {
    const output = 'd';
    const result = removeDuplicates('aabccbd',2);
    expect(result).toEqual(output);
  });

  it("s = 'defggeefeab', k = 2", () => {
    const output = 'dab';
    const result = removeDuplicates('defggeefeab', 2);
    expect(result).toEqual(output);
  });
});
