var image, []

var mapLocation = 8;

var reloading;
var begining;

localStorage.setItem("startOfGame", "beganGame");

var playersInput = "";

var commandNotFoundText = "";

var commands = [];

var insideInventory = [];

var action = "";

var gameMessage = "";

var output = document.querySelector("#output");
var input = document.querySelector("#input");
var gameMessageDiv = document.querySelector("#text");
var commandNotFound = document.querySelector("#cmdNtFound");
var Inventory = document.querySelector("#Inventory");
var image = document.querySelector("img");

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", playGame);

render();

function playGame() {
  playersInput = input.value;
  playersInput = playersInput.toLowerCase();

  action = "";
  commandNotFoundText = "";

  image.src = "images/" + images[mapImage];

  gameMessageDiv.innerHTML = "<br><em>" + gameMessage + "</em>";
  Inventory.innerHTML = "<br><em>" + insideInventory + "</em>";
  commandNotFound.innerHTML = "<br><em>" + commandNotFoundText + "</em>";
}
