export default null;

// (T4) call implementation
function call<T extends [unknown, string, ...unknown[]], R>(
  fn: (...args: T) => R,
  ...args: T
): R {
  return fn(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value);
}

let retVal = call(fill, 3, 'a'); // string[]
console.log(retVal); // [ 'a', 'a', 'a' ]


// (T4) Implement a small typesafe assertion library
function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => _ === a);
}

console.log(is([1], [1, 2], [1, 2, 3])); // false

is('string', 'otherstring');
is(true, false);
is(42, 42);

// Comparing two different types should give a compile-time error
is(10, 'foo');
