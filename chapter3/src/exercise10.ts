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
