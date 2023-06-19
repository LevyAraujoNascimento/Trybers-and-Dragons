import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Orc._instances;
  }
}

export default Orc;