// console.log('Hello TypeScript!');

// Exercise 1
let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b
};
let d = c.apple * 4;

console.log(d);

// cannot add number with array
// let e = a + [];

// ======================================================
// REPL( Read - Eval[evaluate] - Print - Loop )
// 1. 读取 - 执行 - 打印输出 - 循环
// 2. 交互式解释器，就是你往REPL里输入一行代码，它立即给你执行结果
// ======================================================

// ts-node
// ts-node is a TypeScript engine and REPL for Node.js, and it converts TypeScript into JavaScript