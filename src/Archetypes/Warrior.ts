import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  public energyTypeAtt: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this.energyTypeAtt = 'stamina';
    Warrior._instances += 1;
  }
  
  public static createdArchetypeInstances(): number {
    return Warrior._instances;
  }

  public get energyType(): EnergyType {
    return this.energyTypeAtt;
  }
}

export default Warrior;