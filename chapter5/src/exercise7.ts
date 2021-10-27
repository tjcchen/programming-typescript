export default null;

// 5.4.2 interface implementation
// (1) interface can define readonly property
// (2) interface cannot either use public, protected, private modifier, or static key word
// (3) we can implement multiple interfaces
interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'cat';

  eat(food: string) {
    console.info('Eat some', food, '. Yummy!');
  }

  sleep(hours: number) {
    console.info('Slept for', hours, 'hours');
  }

  meow() {
    console.info('Meow');
  }
}

const cat = new Cat();
cat.eat('Carrot');     // Eat some Carrot . Yummy!
cat.sleep(8);          // Slept for 8 hours
cat.meow();            // Meow
console.log(cat.name); // cat
