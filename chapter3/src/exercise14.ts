export {};

// 3.4 exercise
// (1)
let a = 1024;
let b = 'apples and oranges';
const c = 'pineapples';
let d = [true, true, false];
let e = {type: 'ficus'};
let f = [1, false];
const g = [3];
let h = null;      // h is 'any' type

// (2)
let i: 3 = 3;
i = 4;             // Error: Type '4' is not assignable to type '3'

let j = [1, 2, 3];
j.push(4);
j.push('5');       // Error: Argument of type '5' is not assignable to parameter of type 'number'

let k: never = 4;  // Error: Type '4' is not assignable to type 'never'

let l: unknown = 4;
let m = l * 2;     // Error: l is of type 'unknown'