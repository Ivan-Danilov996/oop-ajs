import Character from './Character'

class Undead extends Character {
    constructor(name) {
        super(name)
        this.type = 'Undead'
        this.attack = 15; 
        this.defence = 25;
    }
}

export default Undead