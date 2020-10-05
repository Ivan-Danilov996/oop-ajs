// TODO: write your code here
import sum from './basic';
import Character from './Character'
import Zombie from './Zombie'
import Undead from './Undead'
import Daemon from './Daemon'
import Magician from './Magician'
import Swordsman from './Swordsman'
import Bowerman from './Bowerman'

console.log('worked');

console.log(sum([1, 2]));

const jack = new Undead('jack')

console.log(jack)
jack.levelUp()
console.log(jack)
jack.damage(50)
console.log(jack)





