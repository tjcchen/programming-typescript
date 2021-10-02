export {};

// 4.1.5 Generator Function
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibonacciGenerator = createFibonacciGenerator();  // IterableIterator<number>
console.log(fibonacciGenerator.next());    // value is { value: 0, done: false }
console.log(fibonacciGenerator.next());    // value is { value: 1, done: false }
console.log(fibonacciGenerator.next());    // value is { value: 1, done: false }
console.log(fibonacciGenerator.next());    // value is { value: 2, done: false }
console.log(fibonacciGenerator.next());    // value is { value: 3: done: false }
let retVal = fibonacciGenerator.next();    // value is { value: 5, done: false }  
console.log(retVal);
