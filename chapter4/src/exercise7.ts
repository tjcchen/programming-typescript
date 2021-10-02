export {};

// 4.1.6 Iterator
// (1) How to implement a iterator?
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

console.log('numbers: ', numbers); // numbers:  { [Symbol(Symbol.iterator)]: [GeneratorFunction: [Symbol.iterator]] }

// (2) built-in inerator: Array, Map, Set, String
// for-of iterator
for (let a of numbers) {
  console.log(a); // 1 2 3 4 5 6 7 8 9 10
}

// spread iterator
let allNumbers = [...numbers];  // number[]
console.log(allNumbers);        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// destructure an iterator
let [one, two, ...rest] = numbers; // [number, number, number[]]
console.log(one);     // 1
console.log(two);     // 2
console.log(rest);    // [3, 4, 5, 6, 7, 8, 9, 10]