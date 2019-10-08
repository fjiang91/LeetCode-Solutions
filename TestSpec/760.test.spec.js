const anagramMappings = require('../760. Find Anagram Mappings');

describe('anagramMappings -> Return an array of corresponding index mapping from A to B', () => {
  it ("A = [1,2,3], B = [2,1,3]", () => {
    const output = [1,0,2];
    const result = anagramMappings([1,2,3],[2,1,3]);
    expect(result).toEqual(output);
  });

  it("A = [1,2,3,4,5,6,7,8], B = [2,1,3,6,8,7,5,4]' , maxCost = 2", () => {
    const output = [1,0,2,7,6,3,5,4];
    const result = anagramMappings([1,2,3,4,5,6,7,8],[2,1,3,6,8,7,5,4]);
    expect(result).toEqual(output);
  });

  it("A = [1,1,2,2], B = [2,1,2,1]' , maxCost = 0", () => {
    const output = [3,3,2,2];
    const result = anagramMappings([1,1,2,2], [2,1,2,1]);
    expect(result).toEqual(output);
  });
});
