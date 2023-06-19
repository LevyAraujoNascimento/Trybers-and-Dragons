import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  public energyTypeAtt: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this.energyTypeAtt = 'mana';
    Necromancer._instances += 1;
  }
  
  public static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  public get energyType(): EnergyType {
    return this.energyTypeAtt;
  }
}

export default Necromancer;