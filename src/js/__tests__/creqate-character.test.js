import Character from '../Character'
import Zombie from '../Zombie'
import Undead from '../Undead'
import Daemon from '../Daemon'
import Magician from '../Magician'
import Swordsman from '../Swordsman'
import Bowerman from '../Bowerman'

test.each([
    ['Alex', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Daemon',
    }],
    ['Semen', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'Daemon',
    }],
  ])('create Daemon', (name, expected) => {
    const result = new Daemon(name);
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Bowerman',
    }],
    ['Semen', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'Bowerman',
    }],
  ])('create Bowerman', (name, expected) => {
    const result = new Bowerman(name);
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex', {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Magician',
    }],
    ['Semen', {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'Magician',
    }],
  ])('create Magician', (name, expected) => {
    const result = new Magician(name);
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Swordsman',
    }],
    ['Semen', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'Swordsman',
    }],
  ])('create Swordsman', (name, expected) => {
    const result = new Swordsman(name);
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex', {
      attack: 15,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Undead',
    }],
    ['Semen', {
      attack: 15,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'Undead',
    }],
  ])('create Undead', (name, expected) => {
    const result = new Undead(name);
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Zombie',
    }],
    ['Semen', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'Zombie',
    }],
  ])('create Zombie', (name, expected) => {
    const result = new Zombie(name);
    expect(result).toEqual(expected);
  });