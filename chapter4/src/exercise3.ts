export {};

// 4.1.2 rest parameter
// (1)
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum([1, 2, 3])); // 6