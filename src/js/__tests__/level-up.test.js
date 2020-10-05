import Zombie from '../Zombie'
import Undead from '../Undead'
import Daemon from '../Daemon'
import Magician from '../Magician'
import Swordsman from '../Swordsman'
import Bowerman from '../Bowerman'

test.each([
    ['Alex',
    {
      attack: 48,
      defence: 12,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'Daemon',
      }
    ],
  ])('level-up Daemon', (name, expected) => {
    const result = new Daemon(name)
    result.levelUp()
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex',
    {
      attack: 48,
      defence: 12,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'Zombie',
      }
    ],
  ])('level-up Zombie', (name, expected) => {
    const result = new Zombie(name)
    result.levelUp()
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex',
    {
      attack: 18,
      defence: 30,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'Undead',
      }
    ],
  ])('level-up Undead', (name, expected) => {
    const result = new Undead(name)
    result.levelUp()
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex',
    {
      attack: 48,
      defence: 12,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'Swordsman',
      }
    ],
  ])('level-up Swordsman', (name, expected) => {
    const result = new Swordsman(name)
    result.levelUp()
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex',
    {
      attack: 12,
      defence: 48,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'Magician',
      }
    ],
  ])('level-up Magician', (name, expected) => {
    const result = new Magician(name)
    result.levelUp()
    expect(result).toEqual(expected);
  });

  test.each([
    ['Alex',
    {
      attack: 48,
      defence: 12,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'Bowerman',
      }
    ],
  ])('level-up Bowerman', (name, expected) => {
    const result = new Bowerman(name)
    result.levelUp()
    expect(result).toEqual(expected);
  });