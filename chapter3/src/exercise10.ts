export {};

// 3.2.11 Tuple
// Tuple is a subset of array, and special array with fixed length.
// In each tuple position, it has a specific type.
let a: [number] = [1];

// [name, surname, birth] tuple
let b: [string, string, number] = ['malcolm', 'gladwell', 1963];
// b = ['queen', 'elizabeth', 'ii', 1926];  // Error: Type 'string' is not assignable to type 'number'

console.log(b[0], b[1], b[2]); // malcolm gladwell 1963

// (1) optional tuple element
let trainFares: [number, number?][] = [
  [3.75],
  [8.25, 7.70],
  [10.50]
];

// equals to
let moreTrainFares: ([number] | [number, number])[] = [
  [3.75],
  [8.25, 7.70],
  [10.50]
];

console.log(trainFares[0], trainFares[1], trainFares[2]); // [ 3.75 ] [ 8.25, 7.7 ] [ 10.5 ]

// (2) rest gramma supportative, eg: ...
// at least one element in friends list
let friends: [string, ...string[]] = ['Jackie', 'Sara', 'Tali', 'Chloe', 'Claire'];

// different elements
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c'];

console.log(friends, list); // [ 'Jackie', 'Sara', 'Tali', 'Chloe', 'Claire' ] [ 1, false, 'a', 'b', 'c' ]


