// 3.1 Type Terminology
function squareOf(n: number) {
  return n * n;
}

squareOf(2);
// squareOf('z'); // TS error, string cannot be assigned to number

// 3.2.1 any
// we should avoid using any as much as possible
let a: any = 666;            // any
let b: any = ['danger'];     // any
let c = a + b;               // any

console.log(c);              // 666danger

// 3.2.2 unknown
// if you cannot predict a value's type, you should use unknown, dot not use any
let d: unknown = 30;         // unknown
let e = d === 123;           // boolean
// let f = d + 10;              // error: Object is of type 'unkown'
if (typeof d === 'number') {
  let g = d + 10;            // number
}

// 3.2.3 boolean
let aa = true;               // boolean
var bb = false;              // boolean
const ccc = true;            // true
let ddd: boolean = true;     // boolean
let eee: true = true;        // true, correct
// let fff: true = false;       // Error: Type false is not assignable to type true
