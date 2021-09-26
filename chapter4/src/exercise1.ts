// Chapter 4 Function
// 1. declaration & invocation of function
// 2. overloading
// 3. polymorphism
// 4. polymorphism alias

// (1) implicitly annotation
function add(a: number, b: number) {
  return a + b;
}

// explicitly added annotation
function add1(a: number, b: number): number {
  return a + b;
}

// (2) five ways of declaring functions
// 2.1 function name
function greet(name: string) {
  return 'hello ' + name; 
}

// 2.2 function expression
let greet2 = function(name: string) {
  return 'hello ' + name;
};

// 2.3 arrow function expression
let greet3 = (name: string) => {
  return 'hello ' + name;
};

// 2.4 arrow function shorthand
let greet4 = (name: string) => 'hello ' + name;

// 2.5 with Function
let greet5 = new Function('name', 'return "hello " + name');

console.log(greet5('jason')); // hello jason