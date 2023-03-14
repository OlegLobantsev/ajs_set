import Team from '../app';

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const hero0 = new Character('J0', 'Zombie');
const hero1 = new Character('J1', 'Zombie');
const hero2 = new Character('J2', 'Zombie');
const hero3 = hero0;

test('add', () => {
  const comandos = new Team();
  comandos.add(hero0);
  expect(() => {
    comandos.add(hero3);
  }).toThrow(Error);
});

test('addAll', () => {
  const comandos = new Team();
  comandos.addAll(hero0, hero1);
  expect(comandos.toArray()).toEqual([hero0, hero1]);
});

test('toArray', () => {
  const comandos = new Team();
  comandos.addAll(hero0, hero3, hero1, hero2);
  expect(comandos.toArray()).toEqual([hero0, hero1, hero2]);
});
