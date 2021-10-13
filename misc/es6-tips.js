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


// (6) Object.values()
const depts = {
  'logistic_dept': [1, 2, 3],
  'hr_dept': [5, 8, 12],
  'admin_dept': [5, 22, 32],
  'trans_dept': [3, 64, 99],
};

let member = [...new Set(Object.values(depts).flat(Infinity))]; // [1,  2,  3,  5,  8, 12, 22, 32, 64, 99]
console.log(member);


// (7) retrieve optional object value
const obj5 = {
  name: 'russel'
};
const name2 = obj5 && obj5.name;
console.log(name2); // russel or undefined

const name3 = obj5?.name;
console.log(name3); // // russel or undefined

// (8) dynamic object key
let obj6 = {};
let index = 1;
obj6[`topic${index}`] = 'book1'

console.log(obj6.topic1); // book1

// (9) empty value
// if(value !== null && value !== undefined && value !== ''){
//   //...
// }

// if(value??'' !== ''){
//   //...
// }

// (10) promise
const fn1 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};
const fn2 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
};

const fn = async () =>{
  const res1 = await fn1();
  console.log(res1); // 1
  const res2 = await fn2();
  console.log(res2); // 2
}

fn();

// parallel requesting with promise all, and promise race
const fn3 = () =>{
  Promise.all([fn1(), fn2()]).then(res =>{
      console.log(res);// [1, 2]
  }) 
};
const fn4 = () =>{
  Promise.race([fn1(), fn2()]).then(res =>{
      console.log(res);// 1
  }) 
};

fn3();
fn4();
