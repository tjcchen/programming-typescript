export {}

// 3.2.8 object
// (1) wrong declaration
let a: object = {
  b: 'x'
};

// console.log(a.b); // Error, Property 'b' does not exist on type 'object'

// (2)
let aa = {
  bb: 'x' 
};        // {b: string}

console.log(aa.bb); // x

// (3)
let bb = {
  cc: {
    dd: 'ff'
  }
};        // {c: {d: string}}

console.log(bb.cc.dd); // ff

// (4) specify type
let aaa: {bbb: number} = {
  bbb: 12
};  // {bbb: number}

console.log(aaa.bbb); // 12
