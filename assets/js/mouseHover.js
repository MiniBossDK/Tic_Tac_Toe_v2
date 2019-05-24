let numberOfMarkers = 0;

function Hover() {
  if(numberOfMarkers == 9) { // if the map has been filled up
    potentialWinner = 2; // 2 indicates a tie
    declareWinner();
  } else {
    numberOfMarkers = 0; // Reset the counter
  }

  // Override the map everytime the Hover function is called
  for(let i=0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      rect(i*w, j*w, w, w);
    }
  }
  // (Temporally) draws the marker on the position according to the mouse's position
  if(mouseX > 0 && mouseY > 0) { // If the mouse is inside the canvas
    let coloum = int(mouseX / w) * w;
    let row = int(mouseY / w) * w;
    image(figure, coloum, row, w, w);
  }

  // Put the the markers on their respective places
  for(let i=0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(map[i][j] != 0) { // if the position on the map doesn't equal 0
        numberOfMarkers += 1; // count the number of markers putted on the map
        rect(i*w, j*w, w, w); // Place a rectangle to override
        if(map[i][j] == -1) image(cross, i*w, j*w, w, w);
        if(map[i][j] == 1) image(circle, i*w, j*w, w, w);
      }
    }
  }
}
