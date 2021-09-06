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
const cc = true;             // true
let dd: boolean = true;      // boolean
let ee: true = true;         // true, correct
// let fff: true = false;    // Error: Type false is not assignable to type true


// 3.2.4
let aaa = 1234;              // number
let bbb = Infinity * 0.10;   // number
const ccc = 5678;            // 5678
let ddd = aaa < bbb;         // boolean
let eee: number = 100;       // number
let fff: 26.218 = 26.218;    // 26.218
// let ggg: 26.218 = 10;        // Error
