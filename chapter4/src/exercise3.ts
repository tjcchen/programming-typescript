export {};

// 4.1.2 rest parameter
// (1)
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum([1, 2, 3])); // 6

// (2) arguments
function sumVariadic(): number {
  return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0);  // unsafe, total and n are 'any' type
}

// sumVariadic(1, 2, 4); // Error: this cannot work in ts environment

// (3) correct way with rest params
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadicSafe(4, 5, 6));   // 15


// (4) Console
interface Console {
  log(message?: any, ...optionalParams: any[]): void;
}