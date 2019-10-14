var queensAttacktheKing = function(queens, king) {
  let queenMap = {};
  for (let i = 0; i < queens.length; i++){
      let [row, col] = queens[i];
      let cell = row + '-' + col;
      queenMap[cell] = true;
  }

  let eightDirection = { '1': [0,-1], '2':[-1,-1], '3':[-1, 0], '4':[-1, 1], '5':[0,1], '6':[1,1], '7':[1, 0], '8':[1, -1]}

  let queue = [[king[0], king[1], '1'],[king[0], king[1], '2'],[king[0], king[1], '3'],[king[0], king[1], '4'],[king[0], king[1], '5'],[king[0], king[1], '6'],[king[0], king[1], '7'],[king[0], king[1], '8']];
  let res = [];
  let foundMap = {};

  while (queue.length) {
      let [currRow, currCol, currDir] = queue.shift();
      let currCell = currRow + '-' + currCol;
      if (queenMap[currCell]) {
          res.push([currRow, currCol]);
          foundMap[currDir] = true;
          continue;
      }

      if (currRow < 0 || currRow >= 8 || currCol < 0 || currCol >= 8 || foundMap.hasOwnProperty(currDir) ) {
          foundMap[currDir] = true;
      } else {
          let [x,y] = eightDirection[currDir]
          queue.push([currRow + x, currCol + y, currDir])
      };

  };

  return res;
};

module.exports = queensAttacktheKing;
