function checkForWinner() {

  for (var i = 0; i < 3; i++) {
    if (map[0][i] == turn && map[1][i] == turn && map[2][i] == turn) return turn; // Check the rows
    if (map[i][0] == turn && map[i][1] == turn && map[i][2] == turn) return turn; // Check the coloums
  }

  if(map[0][0] == turn && map[1][1] == turn && map[2][2] == turn) return turn; // Check the first diagonal
  if(map[0][2] == turn && map[1][1] == turn && map[2][0] == turn) return turn; // Check the second diagonal

  return 0; // Return 0 if there is no winner
}

function declareWinner() {
  if(potentialWinner != 0) { // if the checkForWinner function doesn't return 0
    isWinner = true; // Winner is found!

    // Write some text to indicate the winner
    switch (potentialWinner) {
      case -1:
        createP("Winner is cross");
        createP("Press any key to reset");
        break;
      case 1:
        createP("Winner is circle");
        createP("Press any key to reset");
        break;
      case 2:
        createP("It's a tie");
        createP("Press any key to reset");
        break;
      default:
        console.log("Something went wrong!");
    }
  }
}
