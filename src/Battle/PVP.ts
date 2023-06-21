import Fighter, { AllFighters } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private lutadorA: Fighter, private lutadorB: Fighter) {
    super(lutadorA);
  }

  private stillFighting(): void {
    let figthing = true;
    while (figthing === true) {
      this.player.attack(this.lutadorB);
      this.lutadorB.attack(this.player);

      if (this.player.lifePoints === -1 || this.lutadorB.lifePoints === -1) {
        figthing = false;
      }
    }
  }

  fight(): number {
    this.stillFighting()
    if (this.player.lifePoints > 0) return 1;
    return -1;
  }
}

export default PVP;