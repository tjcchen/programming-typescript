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


// (2) type alias cannot be declared twice, just like let const var
type Color = 'red';
// type Color = 'blue';    // Error: Duplicate identifer 'Color'

let x = Math.random() < .5;
if (x) {
  type Color = 'blue';     // rewrite type Color = 'blue';
  let b: Color = 'blue';
  console.log(b);          // b is having its scope in if block
} else {
  let b: Color = 'red';
  console.log(b);          // b is having its scope in else block
}

let c: Color = 'red';      // we now can only assign 'red' if we specify the type of c
console.log(c);            // red