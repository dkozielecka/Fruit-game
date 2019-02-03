export const startGame = function(event) {
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
};
