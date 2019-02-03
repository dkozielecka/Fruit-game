import { backgroundColors, fruitsBox, game, startButton } from "./settings.js";
import { spawnFruits, spawnBombs } from "./spawn-items.js";
export const startGame = function(event) {
  function BackgroundChanger() {
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random() * 7)];
  }

  if (event.keyCode === startButton) {
    fruitsBox.classList.add("disable");
    let fruitsMaker = setInterval(spawnFruits, 500);
    const changeColor = setInterval(BackgroundChanger, 1000);
    let bombMaker = setInterval(spawnBombs, 2000);
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
