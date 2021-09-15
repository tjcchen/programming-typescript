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

// unique symbol
const ee = Symbol('e');                 // typeof e
const ff: unique symbol = Symbol('f');  // typeof f
// let gg: unique symbol = Symbol('f');    // Error: A variable whose type is 'unique symbol' type must be 'const'

let hh = ee === ee;                      // boolean
// let ii = ee === ff;                      // Error: This condition will always return 'false' since the types 'unique symbol' and 'unique symbol' have no overlap
