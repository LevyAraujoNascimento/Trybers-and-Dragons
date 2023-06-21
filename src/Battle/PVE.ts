import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    protected player: Fighter,
    private enemies: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  private battle(enemy: Fighter | SimpleFighter): void {
    let figthing = true;
    while (figthing === true) {
      this.player.attack(enemy);
      enemy.attack(this.player);

      if (this.player.lifePoints === -1 || enemy.lifePoints === -1) {
        figthing = false;
      }
    }
  }

  private stillFighting(): void {
    for (let i = 0; i < this.enemies.length; i += 1) {
      this.battle(this.enemies[i]);
      if (this.player.lifePoints === -1) break;
    }
  }

  fight(): number {
    this.stillFighting();
    if (this.player.lifePoints > 0) return 1;
    return -1;
  }
}

export default PVE;