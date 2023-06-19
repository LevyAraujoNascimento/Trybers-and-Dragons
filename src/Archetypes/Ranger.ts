import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  public energyTypeAtt: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this.energyTypeAtt = 'stamina';
    Ranger._instances += 1;
  }
  
  public static createdArchetypeInstances(): number {
    return Ranger._instances;
  }

  public get energyType(): EnergyType {
    return this.energyTypeAtt;
  }
}

export default Ranger;