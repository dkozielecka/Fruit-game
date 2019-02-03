import { spawnFruits, spawnBombs } from "./modules/spawn-items.js";
import { startGame } from "./modules/start-game.js";
import { fruitsGame } from "./modules/game-config.js";

{
  fruitsGame();
  startGame();
  spawnFruits();
  spawnBombs();
}
