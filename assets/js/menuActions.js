let easyMessage = "*This is freaking easy bro! The AI is just setting random markers!";
let mediumMessage = "*The AI might want to stop you from winning!";
let hardMessage = "*Basically impossible! Just stop trying. Trust me! You won't win!";

function difficultyMessage(message) {
  switch (message) {
    case 1:
      document.getElementById('message').innerHTML = easyMessage;
      break;
    case 2:
      document.getElementById('message').innerHTML = mediumMessage;
      break;
    case 3:
      document.getElementById('message').innerHTML = hardMessage;
      break;
    default:
      console.log("Something went from here?");
  }
}

let PVAI = "*No friends, huh? Yeah... enjoy your temporally friend who might be better than you";
let PVP = "*Who is going to win? You or the guy that is about to be smashed in the head with a keyboard?";

function gamemodeMessage(message) {
  switch (message) {
    case 1:
      document.getElementById('funMessage').innerHTML = PVAI;
      break;
    case 2:
      document.getElementById('funMessage').innerHTML = PVP;
      break;
    default:
      console.log("Something went from here?");
  }
}
