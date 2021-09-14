export {}

// 3.2.6 string
let a = 'hello';          // string
var b = 'billy';          // string
const c = '!';            // '!'
let d = a + ' ' + b + c;  // string
let e: string = 'zoom';   // string
let f: 'john' = 'john';   // john
// let g: 'john' = 'zoe';    // Error, Type zoe is not assignable to type john

// 3.2.7 symbol
let aa = Symbol('a');            // symbol
let bb: symbol = Symbol('b');    // symbol
var cc = aa === bb;              // boolean, false
// let dd = aa + 'x';               // Error, the '+' operator cannot be applied to type 'symbol'

console.log(cc);
