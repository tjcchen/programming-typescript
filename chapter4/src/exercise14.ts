export {}

// 4.2.1 when to bind filter
// (1) specify T scope in Filter
type Filter<T> = {
  (array: T[], fn: (item: T) => boolean): T[]
};

// Error Case 1
// let filter: Filter = (array, fn) => {};  // Error: Generic type 'Filter' requires 1 type arguments

// Error Case 2
// type OtherFilter = Filter;       // Error: Generic type 'Filter' requires 1 type arguments

// Successful Case 1
let filter: Filter<number> = (array, fn) => {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i];
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

// Successful Case 2
type StringFilter = Filter<string>;

let stringFilter: StringFilter = (array, fn) => {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i];
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

