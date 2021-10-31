export default null;

// 5.7 polymorphism
// Like function and type, class and interface also have a good support for generic
class MyMap<K, V> {  // 1. declare the scope of K, V
  constructor(initialKey: K, initialValue: V) { // 2. cannot declare generic in constructor
    // ...
  }

  get(key: K): V { // 3. we can use K, V in any place of class MyMap
    // ...
  }

  set(key: K, value: V): void {
    // ...
  }

  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> { // 4. we can redeclare K1, V1 if needed
    // ...
  }

  static of<K, V>(k: K, v: V): MyMap<K, V> {  // 5. static methods cannot use access class generic, but it can declare by itself
    // ...
  }
}

