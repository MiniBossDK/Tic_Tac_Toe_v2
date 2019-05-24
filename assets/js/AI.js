// Random AI - Easy
function easyAI() {
  // Gets two random numbers until space has been found
  for(let i=0; i < 20; i++) {
    let coloum = Math.floor(Math.random() * 3); // Get a random number between 0 and 3, excluding 3
    let row = Math.floor(Math.random() * 3);
    if(map[coloum][row] == 0) {
      turn *= -1;
      map[coloum][row] = turn;
      break;
    }
  }
}


// Prevention AI - Medium
let rowAI;
let coloumAI;
function mediumAI() {
  // Check rows, coloums and diagonals and see what is true
  if(checkRows()) {
    turn *= -1;
    map[coloumAI][rowAI] = turn;
    console.log("Row");
  } else if(checkColoums()) {
    turn *= -1;
    map[coloumAI][rowAI] = turn;
    console.log("Coloum");
  } else if(checkFirstDiagonal()) {
    turn *= -1;
    map[coloumAI][rowAI] = turn;
    console.log("FD");
  } else if(checkSecondDiagonal()) {
    turn *= -1;
    map[coloumAI][rowAI] = turn;
    console.log("SD");
  } else {
    easyAI();
    console.log("Random");
  }
}

// Impossible/Stratestic AI - Hard

function hardAI() {
  let firstDiagonal = getFirstDiagonal();
  let secondDiagonal = getSecondDiagonal();
  if(map[0][0] == turn || map[0][2] == turn || map[2][0] == turn || map[2][2] == turn) {
    if(map[1][1] == 0) {
      console.log("Hard");
      turn *= -1;
      map[1][1] = turn;
    }
  } else {
    mediumAI();
  }
}


//------------------------------------Checkers-----------------------------------------//
let score;
let scoreAI;
let zeroPosition;
function checkRows() {
  scoreAI = 0;
  score = 0;
  for(let i=1; i <= 3; i++) {
    score = 0;
    scoreAI = 0;
    let row = getRow(i);
    for(let j=0; j < 3; j++) {
      if(row[j] == turn) {
        score += 1;
      } else if(row[j] == turn*-1) { // If the AI's marker is on the position
        score = 0; // Zero the score
        break;
        scoreAI += 1;
      } else if(row[j] == 0) {
        zeroPosition = j;
      }
    }
    if(score == 2) {
      rowAI = i-1;
      coloumAI = zeroPosition;
      return true;
    }
  }
  return false;
}

function checkColoums() {
  scoreAI = 0;
  score = 0;
  for(let i=1; i <= 3; i++) {
    score = 0;
    scoreAI = 0;
    let coloum = getColoum(i);
    for(let j=0; j < 3; j++) {
      if(coloum[j] == turn) {
        score += 1;
      } else if(coloum[j] == turn*-1) {
        score = 0;
        break;
      } else if(coloum[j] == 0) {
        zeroPosition = j;
      }
    }
    if(score == 2) {
      rowAI = zeroPosition;
      coloumAI = i-1;
      return true;
    }
  }
  return false;
}

function checkFirstDiagonal() {
  score = 0;
  let firstDiagonal = getFirstDiagonal();
  for(let i=0; i < 3; i++) {
    if(firstDiagonal[i] == turn) {
      score += 1;
    } else if(firstDiagonal[i] == turn*-1) {
      score = 0;
      break;
    } else if(firstDiagonal[i] == 0) {
      zeroPosition = i;
    }
  }
  if(score == 2) {
    rowAI = zeroPosition;
    coloumAI = zeroPosition;
    return true;
  }
  return false;
}

function checkSecondDiagonal() {
  score = 0;
  let secondDiagonal = getSecondDiagonal();
  for(let i=0; i < 3; i++) {
    if(secondDiagonal[i] == turn) {
      score += 1;
    } else if(secondDiagonal[i] == turn*-1) {
      score = 0;
      break;
    } else if(secondDiagonal[i] == 0) {
      zeroPosition = i;
    }
  }
  if(score == 2) {
    if(zeroPosition == 0) {
      rowAI = 2;
      coloumAI = 0;
    } else if(zeroPosition == 1) {
      rowAI = zeroPosition;
      coloumAI = zeroPosition;
    } else if(zeroPosition == 2) {
      rowAI = 0;
      coloumAI = 2;
    }
    return true;
  }
  return false;
}

//--------------------------------Getter---------------------------------------------//

function getColoum(coloum) {
  let newList = [];
  for(let i=0; i < coloum; i++) {
    for(let j = 0; j < 3; j++) {
      newList[j] = map[i][j];
    }
  }
  return newList;
}

function getRow(row) {
  let newList = [];
  for(let i=0; i < row; i++) {
    for(let j = 0; j < 3; j++) {
      newList[j] = map[j][i];
    }
  }
  return newList;
}

function getFirstDiagonal() {
  let newList = [];
  for(let i=0; i < 3; i++) {
    newList[i] = map[i][i];
  }
  return newList;
}

function getSecondDiagonal() {
  let newList = [];
  newList[0] = map[0][2];
  newList[1] = map[1][1];
  newList[2] = map[2][0];
  return newList;
}
