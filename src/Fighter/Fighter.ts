import Energy from '../Energy';

interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter | Fighter): void;
  receiveDamage(attackPoints: number): number;
}

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter | SimpleFighter): void;
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;