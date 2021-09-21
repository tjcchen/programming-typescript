export {};

// 3.2.10 Array
// TS array supports concat, push, slice, indexOf etc. operation
let a = [1, 2, 3];            // number[]
var b = ['a', 'b'];           // string[]
let c: string[] = ['a'];      // string[]
let d: (string | number)[] = [1, 'a'];             // (string | number)[]
const e = [2, 'b'];           // (string | number)[]

// (1) push different types of value is not allowed
let f = ['red'];
f.push('blue');
// f.push(true);               // Error: Argument of type 'true' is not assignable to paramter of type 'string'

// (2) this is allowed if we do not specify value type
let g = [];                   // any[]
g.push(1);                    // number[]
g.push('red');                // (string | number)[]

// (3) this is not allowed
let h: number[] = [];
h.push(1);
// h.push('red');                // Error: Argument of type 'red' is not assignable to paramter of type 'number'


// hybrid array
// convert 'a' => 'A', 1 => 3
let hybridArr = [1, 'a'];
let retArr = hybridArr.map(_ => {
  if (typeof _ === 'number') {
    return _ * 3;
  }
  return _.toUpperCase();
});

console.log(retArr); // [3, 'A']

// build array with different types
function buildArray() {
  let a = [];        // any[]
  a.push(1);         // number[]
  a.push('x');       // (string | number)[]
  return a;
}

let myArray = buildArray();   // (string | number)[]
// myArray.push(true);           // Error: Argument of type 'true' is not assignable to paramter of type 'string | number'

console.log(myArray);   // [ 1, 'x' ]
