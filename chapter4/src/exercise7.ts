export {};

// 4.1.6 Iterator
// How to implement a iterator?
// step1: implement a symbol.iterator property
// step2: implement an object or class which contains a next method
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  }
};

console.log(numbers[Symbol.iterator]().next()); // { value: 1, done: false }
console.log(numbers[Symbol.iterator]().next()); // { value: 1, done: false }
console.log(numbers[Symbol.iterator]().next()); // { value: 1, done: false }

