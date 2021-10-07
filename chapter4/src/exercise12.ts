// 4.2 polymorphism
// (1) filter implementation
function filter(array: any[], fn: Function) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (fn(item)) { // only push valid item
      result.push(item);
    }
  }
  return result;
}

// @ts-ignore
const retVal = filter([1, 2, 3, 4], _ => _ < 3);
console.log(retVal); // [1, 2]