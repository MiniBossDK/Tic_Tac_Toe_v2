/*
  Thanks to William Bille Meyling for helping me with the code!
  Link to his youtube channel:
  https://www.youtube.com/channel/UCz4z1UFWUfuLBjzOXdScRSA
*/
/* Notes:
Cross = -1
Circle = 1
*/

let potentialWinner;
let cross;
let circle;
let w;
let figure;
let difficulty;
let isMultiplayer;
let turn = 1;
let isWinner = false;

difficulty = sessionStorage.getItem("difficulty");
isMultiplayer = sessionStorage.getItem("isMultiplayer");

let map = [ // 2D list indicating the map. 0 indicates free space.
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

function preload() {
  cross = loadImage("assets/cross.png");
  circle = loadImage("assets/circle.png");
  if(turn == 1) {
    figure = cross;
  } else {
    figure = circle;
  }
}

function setup() {
  let screenHeight = 600;
  let screenWidth = 600;
  createCanvas(screenWidth, screenHeight);
  w = width / 3; // width of every box

  // Make the map in the start
  for(let i=0; i < 3; i++) {
    for(let j=0; j < 3; j++) {
    rect(i*w, j*w, w, w);
    }
  }
}

function mouseMoved() {
  if(!isWinner) Hover(); // Make a Hover-effect if the winner hasn't been found
}

function mousePressed() {
  if(isWinner) return; // if the winner has been found... return(don't continue)
  if(mouseX < 0 || mouseY < 0) return;
  let coloum = int(mouseX / w); // Outputs the index of the box in the coloums
  let row = int(mouseY / w); // Outputs the index of the box in the rows
  console.log(mouseY / w);
  console.log(int(mouseY / w));
  if(coloum > 2) return; // Just to make sure there isn't coming any error messages
  if(map[coloum][row] == 0) { // if the number on the pressed position equals 0...
    turn *= -1; // Switch turn
    map[coloum][row] = turn; // Place marker on the pressed position
    Hover();
    potentialWinner = checkForWinner(); // Check for a winner
    declareWinner();
    if(!isWinner) { // if the winner hasn't been found... continue to the oppnent
      if(isMultiplayer == "true") { // if the player has chosen multiplayer(1v1)...
        // Set the marker, which should be used to the Hover function
        if(turn == 1) {
          figure = cross;
        } else {
          figure = circle;
        }
        Hover();
        potentialWinner = checkForWinner();
        declareWinner();
      } else { // ... else run the difficulty choosen from the startmenu
        switch (difficulty) {
          case "1":
            easyAI();
            break;
          case "2":
            mediumAI();
            break;
          case "3":
            hardAI();
            break;
          case "5":
            impossibleAI();
            break;
          default:
            console.log("Something went wrong");
        }
        Hover();
        potentialWinner = checkForWinner();
        declareWinner();
      }
    }
  }
}

// if the a key is pressed and the winner has been found, then restart the game.
function keyPressed() {
  if(isWinner) restartGame();
}

function restartGame() {
  removeElements();
  // Clean the map up by setting everything to zero(free space)
  for(let i=0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      map[i][j] = 0;
    }
  }
  turn = 1;
  figure = cross;
  isWinner = false;
  numberOfMarkers = 0;
  setup();
}
