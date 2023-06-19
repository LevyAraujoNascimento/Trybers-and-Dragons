import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Dwarf._instances;
  }
}

export default Dwarf;
