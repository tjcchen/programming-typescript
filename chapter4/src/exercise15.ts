export {};

// 4.2.2 where to use generic type
// (1) fullhand
type Filter = {
  <T>(array: T[], fn: (item: T) => boolean): T[]
};
// let filter: Filter = (array, fn) => { // ... }


// (2) fullhand
type Filter1<T> = {
  (array: T[], fn: (item: T) => boolean): T[]
};
// let filter: Filter1<number> = (array, fn) => { // ... }


// (3) shorthand
type Filter2 = <T>(array: T[], fn: (item: T) => boolean) => T[];
// let filter: Filter2 = (array, fn) => { //... };


// (4) shorthand
type Filter3<T> = (array: T[], fn: (item: T) => boolean) => T[];
// let filter: Filter3<string> = (array, fn) => { // ... };


// (5) within function
function filter<T>(array: T[], fn: (item: T) => boolean): T[] {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i];
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}

let retVal = filter([1, 2, 3], _ => _ > 2);
console.log(retVal);  // [ 3 ]