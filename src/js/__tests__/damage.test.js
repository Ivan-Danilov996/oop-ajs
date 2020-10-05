import Zombie from '../Zombie'
import Undead from '../Undead'
import Daemon from '../Daemon'
import Magician from '../Magician'
import Swordsman from '../Swordsman'
import Bowerman from '../Bowerman'


test.each([
    [20,
    {
      attack: 40,
      defence: 10,
      health: 82,
      level: 1,
      name: 'Alex',
      type: 'Daemon',
      }
    ],
    [40,
      {
        attack: 40,
        defence: 10,
        health: 64,
        level: 1,
        name: 'Alex',
        type: 'Daemon',
      }
    ],
    [60,
        {
            attack: 40,
            defence: 10,
            health: 46,
            level: 1,
            name: 'Alex',
            type: 'Daemon',
          }
    ],
    [80,
        {
            attack: 40,
            defence: 10,
            health: 28,
            level: 1,
            name: 'Alex',
            type: 'Daemon',
          }
        ],
    [100,
        {
            attack: 40,
            defence: 10,
            health: 10,
            level: 1,
            name: 'Alex',
            type: 'Daemon',
          }
        ],
    [0,
        {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: 'Alex',
            type: 'Daemon',
          }
        ],
  ])('damage Daemon', (points, expected) => {
    const result = new Daemon('Alex')
    result.damage(points)
    expect(result).toEqual(expected);
  });
