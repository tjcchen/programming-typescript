// ES6 tips
// (1) retrieve value from object
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

// destructure obj1 with default value {}
const {a, b, c, d, e} = obj1 || {};
const f = a + d;
const g = c + e;

console.log(f); // 5 = 1 + 5
console.log(g); // 8 = 3 + 5

// assgin a to a1
const {a: a1} = obj1 || {};

console.log(a1); // 1

// (2) merge number and object
const arr1 = [1, 2, 3];
const arr2 = [1, 5, 6];
const arr3 = [...new Set([...arr1, ...arr2])];

console.log(arr3);  // [ 1, 2, 3, 5, 6 ]

const obj2 = {
  a: 1
};

const obj3 = {
  b: 1
};

const obj4 = {
  ...obj2,
  ...obj3,
};

console.log(obj4); // { a: 1, b: 1 }



