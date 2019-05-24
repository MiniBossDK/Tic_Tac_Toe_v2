function impossibleAI(){
  turn *= -1;
  max;
  maxval = -1;
  board = deepCopy(map);
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j] == 0){
        const tempBoard = deepCopy(board)
        tempBoard[i][j] = turn;
        const temp = getScore(tempBoard, turn, turn, 1);
        if(temp > maxval){
          maxval = temp;
          max = [i, j];
        }
      }
    }
  }
  if(map){
      map[max[0]][max[1]] = turn;
  }
}

function deepCopy(arr){
  newarr = arr.slice();
  for(let i = 0; i < newarr.length; i++){
    newarr[i] = newarr[i].slice();
  }
  return newarr;
}

function getScore(board, active, ideal, layer){
  //console.log(board);
  if(checkForWinnerAI(board, ideal)) return 1 / layer;
  if(checkForWinnerAI(board, ideal*-1)) return -1 / layer;
  sum = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j] == 0){
        const newboard = deepCopy(board);
        newboard[i][j] = active;
        sum += getScore(newboard, active * -1, ideal, layer*10);
      }
    }
  }
  return sum;
}

function checkForWinnerAI(board, ideal) {
  for (var i = 0; i < 3; i++) {
    if (board[0][i] == ideal && board[1][i] == ideal && board[2][i] == ideal) return true; // Check the rows
    if (board[i][0] == ideal && board[i][1] == ideal && board[i][2] == ideal) return true; // Check the coloums
  }
  if(board[0][0] == ideal && board[1][1] == ideal && board[2][2] == ideal) return true; // Check the first diagonal
  if(board[0][2] == ideal && board[1][1] == ideal && board[2][0] == ideal) return true; // Check the second diagonal
  return false; // Return 0 if there is no winner
}
