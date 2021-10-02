export {};

// 4.1.5 Generator Function
// 1. function* refers to generator function
// 2. while(true) return value all the time
// 3. yield a; would generate value while invoking next()
// 4. [a, b] = [b, a + b];
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

// a little calculation
let value1 = 3;
let value2 = 5;
[value1, value2] = [value2, value1 + value2 + 10];
console.log(value1, value2);  // 5 18
