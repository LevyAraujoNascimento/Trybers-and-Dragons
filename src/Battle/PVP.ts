import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _lutadorA: Fighter;
  private _lutadorB: Fighter;
  
  constructor(lutadorA: Fighter, lutadorB: Fighter) {
    super(lutadorA);
    this._lutadorA = lutadorA;
    this._lutadorB = lutadorB;
  }

  public fight(): number {
    let stillFighting = true;
    while (stillFighting === true) {
      this._lutadorA.attack(this._lutadorB);
      this._lutadorB.attack(this._lutadorA);
      if (this._lutadorA.lifePoints === -1 
       || this._lutadorB.lifePoints === -1) {
        stillFighting = false;
      }
    }
    if (super.fight() === -1) return -1;
    return 1;
  }
}

export default PVP;