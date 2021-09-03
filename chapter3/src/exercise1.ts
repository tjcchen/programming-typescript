// 3.1 Type Terminology
function squareOf(n: number) {
  return n * n;
}

squareOf(2);
// squareOf('z'); // TS error, string cannot be assigned to number

// 3.2
let a: any = 666;            // any
let b: any = ['danger'];     // any
let c = a + b;               // any

console.log(c);              // 666danger
