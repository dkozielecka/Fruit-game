import { backgroundColors, fruitsBox, game, startButton } from "./settings.js";
import { spawnFruits, spawnBombs } from "./spawn-items.js";

let fruitsMaker;
let changeColor;
let bombMaker;

export const startGame = function(event) {
  function BackgroundChanger() {
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random() * 7)];
  }

  if (event === undefined || event.keyCode === startButton) {
    fruitsBox.classList.add("disable");
    if (fruitsMaker === undefined) fruitsMaker = setInterval(spawnFruits, 500);
    if (changeColor === undefined) changeColor = setInterval(BackgroundChanger, 1000);
    if (bombMaker === undefined) bombMaker = setInterval(spawnBombs, 2000);
    let intervalPause = false;
    function pauseInterval(x) {
      if (!intervalPause && x.keyCode === 32) {
        clearInterval(fruitsMaker);
        clearInterval(bombMaker);
        intervalPause = !intervalPause;
      } else if (x.keyCode === 32) {
        fruitsMaker = setInterval(spawnFruits, 500);
        intervalPause = !intervalPause;
      }
    }
    document.addEventListener("keydown", pauseInterval);
  }
};
