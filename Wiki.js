var images = []
images[0] = "start.png"
images[1] = "a3.png"
images[2] = "a4.png"

var move = 0

var moveImage = 0

var playersInput = "";

var commands = [];

var Lmove = "";

var output = document.querySelector("#output");
var input = document.querySelector("#input");
var MovesDiv = document.querySelector("#text");
var image = document.querySelector("#img");

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", playGame);

function playGame() {
  playersInput = input.value; 
  playersInput = playersInput.toLowerCase();

  switch (playersInput) {
    case "a3": {
      if (move === 1) {
      moveImage = 1
      break
      }
    }
    default :{
      
    break
    }
  }


  image.src = "Images/" + images[moveImage];
  MovesDiv.innerHTML = "<br><em>" + Lmove + "</em>";
}
playGame()