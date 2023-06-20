import Fighter from '../Fighter/Fighter'; // Testando

abstract class Battle {
  constructor(protected player: Fighter) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
