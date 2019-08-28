//Design a Tic Tac Toe on a n x n matrix board

//Faster Approach - Code Aspiration from bdwalker
//O(1) time complexity - to check winner
//O(n) space complexity - to store additional
//Use a row and col array to keep track of the num within the index
//Use diagonal and revDiagonal for keeping the track
//When the num is equal to the size, then we know that a player have fill up the whole row/col/diagonal/revDiagonal
var TicTacToe = function(n) {
  this.winPlayer = 0;
  this.winNum = n;
  this.row = new Array(n).fill(0);
  this.col = new Array(n).fill(0);
  this.diagonal = 0;
  this.revDiagonal = 0;
};

TicTacToe.prototype.move = function(row, col, player) {
  if(this.winPlayer === 0 ){
      //Use 1 and -1 to keep track for player 1 or 2
      const addPoint = player === 1 ? 1 : -1;
      const winNum = this.winNum
      this.row[row] += addPoint;
      this.col[col] += addPoint;

      //Check Diagonal
      if(row === col) this.diagonal += addPoint;

      //Check RevDiagonal
      if( row + col === this.size - 1) this.revDiagonal += addPoint;

      if ( Math.abs(this.row[row]) === winNum || Math.abs(this.col[col]) === winNum || Math.abs(this.diagonal) === winNum || Math.abs(this.revDiagonal) === winNum) {
          this.winPlayer = player;
      }
  }

  return this.winPlayer === 0 ? 0 : player;
};

//Slow Approach
//O(n^2 time complexity)
//O(n^2 space complexitiy)
//Create a grid and the winning conditionals
//Check the winning conditions everytime the player moves
var TicTacToe = function(n) {
  this.winPlayer = 0;
  this.grid = new Array(n);
  this.winCombo = [];
  for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(n).fill(0);
  }

  //Generate all horizontal and vertical winning combo
  for (let i = 0; i < this.grid.length; i++){
      let horizontalWin = [];
      let verticalWin = [];
      for (let j = 0; j < this.grid[0].length; j++){
          horizontalWin.push([i,j]);
          verticalWin.push([j,i]);
      }
      this.winCombo.push(horizontalWin);
      this.winCombo.push(verticalWin);
  }

  //Generate diagonal and reverseDiagonal winning combo
  let diagonalWin = [];
  for (let i = 0; i < this.grid.length; i++){
      diagonalWin.push([i,i]);
  }
  this.winCombo.push(diagonalWin);

  let antiDiagonalWin = [];
  let col = this.grid[0].length - 1;
  for (let row = 0; row < this.grid.length ; row++) {
      antiDiagonalWin.push([row,col]);
      col--;
  }
  this.winCombo.push(antiDiagonalWin);
};

//Check the winner each time when a player moves
TicTacToe.prototype.checkWinner = function(player) {
  for (let i = 0; i < this.winCombo.length; i++){
      let status = true;
      let currWin = this.winCombo[i];
      for (let j = 0 ; j < currWin.length; j++){
          let cell = currWin[j];
          let [row, col] = cell;
          if (this.grid[row][col] !== player) {
              status = false;
              break;
          }
      };
      if (status) return true;
  };

  return false;
};

TicTacToe.prototype.move = function(row, col, player) {
  if (this.winPlayer === 0) {
      this.grid[row][col] = player;

      if (this.checkWinner(player)) {
          this.winPlayer = player;
      }
  };

  return this.winPlayer === 0 ? 0 : player;
};
