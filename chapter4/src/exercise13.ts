export {};

// 4.2
// Filter TS implementation
type Filter = {
  <T>(array: T[], fn: (item: T) => boolean): T[]
};

let filter: Filter = (array, fn) => {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i];
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

// (a) bind T with number
let retVal1 = filter([1, 2, 3], _ => _ > 2);

// (b) bind T with string
let retVal2 = filter(['a', 'b'], _ => _ !== 'b');

// (c) bind T with {firstName: string}
let names = [
  {firstName: 'beth'},
  {firstName: 'caitlyn'},
  {firstName: 'xin'},
];
let retVal3 = filter(names, _ => _.firstName.startsWith('x'));

console.log(retVal1); // [ 3 ]
console.log(retVal2); // [ 'a' ]
console.log(retVal3); // [ { firstName: 'xin' } ]
