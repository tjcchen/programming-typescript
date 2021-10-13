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


// (3) concat string
const name1 = 'james';
const score = 59;
const result = `${name1}${score > 60 ? ' passed': ' failed'}`;

console.log(result); // james failed


// (4) multiple if condition
const type = 3;
// if (
//   type == 1 ||
//   type == 2 ||
//   type == 3 ||
//   type == 4 ||
// ) {
//   // ...
// }

const condition = [1, 2, 3, 4];

// true
if (condition.includes(type)) {
  console.log(true);
} else {
  console.log(false);
}


// (5) replace filter with find, if only need to find value existance
const arr4 = [1, 2, 3, 4, 5];
const retVal = arr4.filter(x => x === 3);
console.log(retVal); // [3]

const retVal1 = arr4.find(x => x === 8);
console.log(retVal1);  // undefined or 3



