function impossibleAI(){
  turn *= -1;
  let max;
  let maxval = -1000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  let board = deepCopy(map);
  let results = [];
  for(let i = 0; i < 3; i++){
    results.push([]);
    for(let j = 0; j < 3; j++){
      results[i].push(null);
    }
  }
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      let temp = -1;
      if(board[i][j] == 0){
        const tempBoard = deepCopy(board)
        tempBoard[i][j] = turn;
        temp = getScore(tempBoard, turn * -1, turn, 1);
        if(temp > maxval){
          maxval = temp;
          max = [i, j];
        }
      }
      results[j][i] = temp;
    }
  }
  console.table(results);
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
  if(checkForWinnerAI(board, ideal)) return 1/(layer*10); //Math.pow(2, 1/layer);
  if(checkForWinnerAI(board, ideal*-1)) return -1/(layer/1000);
  let sum = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j] == 0){
        let newboard = deepCopy(board);
        newboard[i][j] = active;
        let temp = getScore(newboard, active * -1, ideal, layer * 10);
        temp = temp * temp * (temp/Math.abs(temp));
        if(temp){
          sum += temp;
        }
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
