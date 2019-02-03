import { spawnFruits, spawnBombs } from "./modules/spawn-items";
import { startGame } from "./modules/start-game";
import { fruitsGame } from "./modules/game-config";

{
  fruitsGame();
  startGame();
  spawnFruits();
  spawnBombs();
}
