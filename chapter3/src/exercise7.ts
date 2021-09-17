// Type Alias
export {}

// (1) declare type alias with type keywords
type Age = number;

type Person = {
  name: string;
  age: Age;
};

let age: Age = 55;
let driver: Person = {
  name: 'James May',
  age: age
};

console.log(driver.name, driver.age); // James May 55

let age1 = 60;
let driver1: Person = {
  name: 'Kobe Bryant',
  age: age1
};

console.log(driver1.name, driver1.age); // Kobe Bryant 60
