// indexed signature
export {}

// 3.2.8 optional properties
let a: {
  b: number;
  c?: string;
  [key: number]: boolean;
};

a = {b: 1};
a = {b: 1, c: undefined};
a = {b: 1, c: 'd'};
// a = {b: 1, c: true};  // Error, c should be boolean
a = {b: 1, 10: true, 20: false};
// a = {10: true};  // Error, b is missing
// a = {b: 1, 33: 'red'}; // Error, property 33's value should be boolean
