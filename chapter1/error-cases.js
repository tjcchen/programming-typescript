// 1. 数字和数组相加
const a = 3 + [];
console.log(a); // 求值结果为字符串3

// 2. 未定义的值
let obj = {};
console.log(obj.flag); // 求值结果过undefined

// 3. 函数传入错误的类型
function fn(b) {
  return b/2;
}
a('Z'); // 求值结果为NaN