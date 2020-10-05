import Character from './Character'

class Bowerman extends Character {
    constructor(name) {
        super(name)
        this.type = 'Bowerman'
        this.attack = 40; 
        this.defence = 10;
    }
}

export default Bowerman