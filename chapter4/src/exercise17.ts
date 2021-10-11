export {};

// 4.2.3 generic inference
// (1)
function map<T, U>(array: T[], fn: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

// implicitly invocation
let retVal1 = map(
  ['a', 'b', 'c'],
  _ => _ === 'a'
);

console.log(retVal1);  // [ true, false, false ]


// explicitly invocation
let retVal2 = map<string, boolean>(
  ['a', 'b', 'c'],
  _ => _ === 'b'
);

console.log(retVal2); // [ false, true, false ]

// works, boolean can be assigned to string
let retVal3 = map<string, boolean | string>(
  ['a', 'b', 'c'],
  _ => _ === 'b'
);

console.log(retVal3); // [ false, true, false ]

// error: boolean cannot be assigned to number
// let retVal4 = map<string, number>(
//   ['a', 'b', 'c'],
//   _ => _ === 'b'
// );

// error: two arguments are needed
// let retVal5 = map<string>(
//   ['a', 'b', 'c'],
//   _ => _ === 'b'
// );
