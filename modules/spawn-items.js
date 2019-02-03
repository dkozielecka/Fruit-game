import { fruits, bombs, board, playerScore, game } from "./settings.js";
let playerScoreValue = document.getElementById("score").innerText;
export const spawnFruits = function() {
  if (board.children.length <= 20) {
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
};

export const spawnBombs = function() {
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
};
