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

// (3) readonly tuple and array
// regular array is mutable, with push or splice, but sometimes we expect array can be immutable
// we can operate .concat and .slice, but not .push and .splice
let as: readonly number[] = [1, 2, 3];           // readonly number[]
let bs: readonly number[] = as.concat(4);        // readonly number[]
let three = bs[2];                               // number
// as[4] = 5;  // Error: Index signature in type 'readonly number[]' only permits reading
// as.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'

console.log(as, bs, three); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ] 3

// (4) readonly Array and Tuple grammar
type A = readonly string[];         // readonly string[]
type B = ReadonlyArray<string>;     // readonly string[]
type C = Readonly<string[]>         // readonly string[]

type D = readonly [number, string];  // readonly [number, string]
type E = Readonly<[number, string]>; // readonly [number, string]

