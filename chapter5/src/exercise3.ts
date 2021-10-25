// 5.3 use this as return type
// this can be value, type, and return type

// (1)
let set = new Set;
set.add(1).add(2).add(3);
console.log(set.has(2));  // true
console.log(set.has(4));  // false

class NewSet {
  has(value: number): boolean {
    return true;
  }
  // [important] use this as a return value
  // thus, we can chain add operation, eg: set.add(1).add(2).add(3)
  add(value: number): this {
    return this;
  }
}

class MutableSet extends NewSet {
  delete(value: number): boolean {
    return true;
  }
}

let mutableSet = new MutableSet();
mutableSet.add(1);
mutableSet.has(1);
mutableSet.delete(1);
