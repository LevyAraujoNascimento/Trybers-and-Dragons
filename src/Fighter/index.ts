import Fighter from './Fighter';
import SimpleFighter from './SimpleFighter';

type AllFighters =  SimpleFighter | Fighter;

export default Fighter;

export {
  SimpleFighter,
  AllFighters,
};