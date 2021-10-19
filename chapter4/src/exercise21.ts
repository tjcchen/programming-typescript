export default null;

// (T4)
function call<T extends [unknown, string, ...unknown[]], R>(
  fn: (...args: T) => R,
  ...args: T
): R {
  return fn(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value);
}

let retVal = call(fill, 3, 'a');
console.log(retVal); // [ 'a', 'a', 'a' ]
