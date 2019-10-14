const queensAttacktheKing = require('../1222. Queens That Can Attack the King') ;

describe('queensAttacktheKing -> Return the coordinates of all the queens (in any order) that can attack the King.', () => {
  it ('queen = [[0,1]] king = [0,0]', () => {
    const output = [[0,1]];
    const result = queensAttacktheKing([[0,1]],[0,0] );
    expect(result).toEqual(output);
  });

  it('queen = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]] king = [0,0]', () => {
    const output = [[0,1],[1,0],[3,3]];
    const result = queensAttacktheKing([[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], [0,0]);
    expect(result).toEqual(output);
  });

  it('queen = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]] king = [4,4]', () => {
    const output = [[3,3],[2,4],[4,0]];
    const result = queensAttacktheKing([[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], [4,4]);
    expect(result).toEqual(output);
  });
});
