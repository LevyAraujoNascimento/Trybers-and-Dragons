import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Elf._instances;
  }
}

export default Elf;