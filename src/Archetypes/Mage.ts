import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  public energyTypeAtt: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this.energyTypeAtt = 'mana';
    Mage._instances += 1;
  }
  
  public static createdArchetypeInstances(): number {
    return Mage._instances;
  }

  public get energyType(): EnergyType {
    return this.energyTypeAtt;
  }
}

export default Mage;