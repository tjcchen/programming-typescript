export {};

// 4.2.2 map function
// (1) unknown map
function mapOrig(array: unknown[], fn: (item: unknown) => unknown): unknown[] {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

// (2) generic map( self-defined )
function map<T>(array: T[], fn: (item: T) => T): T[] {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

let retVal = map([1, 2, 3], item => item * 2);
console.log(retVal);  // [2, 4, 6]

// (3) generic map
function mapGeneric<T, U>(array: T[], fn: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

let retStr = mapGeneric(
  [
    {name: 'jackie'},
    {name: 'lee'},
    {name: 'andy'},
  ],
  _ => _.name.endsWith('e')
);
console.log(retStr);  // [ true, true, false ]


// (4) TS library filter & map implementation
interface Array<T> {
  filter(
    callbackfn: (value: T, index: number, array: T[]) => any,
    thisArg?: any
  ): T[]

  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[]
}
