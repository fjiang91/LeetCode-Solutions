const expand = require('../1087. brace-expansion') ;

describe('expand -> Return all words that can be formed in this manner, in lexicographical order.', () => {
  it ('S = "{a,b}cf" ', () => {
    const output = ["acf","bcf"];
    const result = expand("{a,b}cf");
    expect(result).toEqual(output);
  });

  it('S = "{a,b}cf{g,h,i}" ', () => {
    const output = ["acfg","acfh","acfi","bcfg","bcfh","bcfi"];
    const result = expand("{a,b}cf{g,h,i}");
    expect(result).toEqual(output);
  });

  it('S = "abcf', () => {
    const output = ['abcf'];
    const result = expand('abcf');
    expect(result).toEqual(output);
  });
});
