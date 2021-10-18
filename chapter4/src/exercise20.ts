// 4.3 type-driven development
// declare type signature first, then write implementation
function map<T, U>(array: T[], fn: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}
