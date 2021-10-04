export {};

// 4.1.8 contextual typing
// (1) invoke a function n times
function times(
  f: (index: number) => void,
  n: number
) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

// works, by ts interence
times(n => console.log(n), 4); // 0 1 2 3

// not working
// function f(n) {              // Error: Parameter 'n' implicitly has an 'any' type
//   console.log(n);            // 0 1 2 3 4
// };

// times(f, 5);
