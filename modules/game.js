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

  function spawnFruits() {
    if (board.children.length <= 19) {
      let fruitContainer = document.createElement("div");
      let fruit = document.createElement("span");
      fruit.setAttribute("class", "fruit");
      fruitContainer.appendChild(fruit);
      board.appendChild(fruitContainer);
      fruit.innerHTML = fruits[Math.floor(Math.random() * 5)];
      let columnStart = Math.floor(Math.random() * 10 + 1);
      let rowStart = Math.floor(Math.random() * 10 + 1);
      fruitContainer.style.gridColumn = `${columnStart} / span 1`;
      fruitContainer.style.gridRow = `${rowStart} / span 1`;
      fruit.addEventListener("click", function() {
        playerScoreValue = parseInt(playerScoreValue) + 1;
        playerScore.innerText = playerScoreValue.toString();
        fruit.setAttribute("class", "disable");
      });
    } else {
      window.alert(`Zdobyłeś ${playerScoreValue} na 20 pkt. Brawo!`);
    }
  }

  function spawnBombs() {
    let bombContainer = document.createElement("div");
    let bomb = document.createElement("span");
    bomb.setAttribute("class", "bomb");
    bombContainer.appendChild(bomb);
    board.appendChild(bombContainer);
    bomb.innerHTML = bombs[Math.floor(Math.random() * 3)];
    let columnStart = Math.floor(Math.random() * 10 + 1);
    let rowStart = Math.floor(Math.random() * 10 + 1);
    bombContainer.style.gridColumn = `${columnStart} / span 1`;
    bombContainer.style.gridRow = `${rowStart} / span 1`;
    bomb.addEventListener("click", function() {
      if (parseInt(playerScoreValue) > 0) {
        playerScoreValue = parseInt(playerScoreValue) - 1;
        playerScore.innerText = playerScoreValue.toString();
      }
      bomb.setAttribute("class", "disable");
    });
  }

  function startGame(event) {
    if (event.keyCode === startButton) {
      fruitsBox.classList.add("disable");
      let fruitsMaker = setInterval(spawnFruits, 500);
      let changeColor = setInterval(BackgroundChanger, 1000);
      let bombMaker = setInterval(spawnBombs, 2000);
      function pauseInterval(x) {
        if (intervalPause === false && x.keyCode === 32) {
          clearInterval(fruitsMaker);
          intervalPause = true;
        } else if (x.keyCode === 32) {
          fruitsMaker = setInterval(spawnFruits, 500);
        }
      }
    }
    document.addEventListener("keydown", pauseInterval);
  }

  document.addEventListener("keydown", startGame);
};
