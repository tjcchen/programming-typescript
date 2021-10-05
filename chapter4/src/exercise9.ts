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


// 4.1.9 function type reloading
// shorthand
type Log = (message: string, userId?: string) => void;

// fullhand( same effect as above )
type Log2 = {
  (message: string, userId?: string): void
};

// we use shorthand format usually, but the benefits of fullhand are many
