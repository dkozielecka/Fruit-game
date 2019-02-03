export const fruitsGame = function() {
  var fruits = ["🍏", "🍐", "🍊", "🍋", "🍓"];

  var backgroundColors = [
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000"
  ];

  const bombs = ["💣", "☣️", "☢️"];
  const board = document.querySelector(".board");
  const fruitsBox = document.querySelector(".fruit-box");
  const game = document.querySelector("#game");
  const startButton = 13;

  let intervalPause = false;

  let playerScoreValue = document.getElementById("score").innerText;
  let playerScore = document.getElementById("score");

  function BackgroundChanger() {
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random() * 7)];
  }

  document.addEventListener("keydown", startGame);
};
