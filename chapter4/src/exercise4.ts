export {};

// 4.1.3 call, apply and bind ( function invocation )
// To safely use .call, .apply and .bind, we need open strictBindCallApply option
// in tsconfig.json. By default, strict mode would enable this option automatically
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);                 // result is 30
add.apply(null, [10, 20]);   // result is 30, a for array and c for comma
add.call(null, 10, 20);      // result is 30
add.bind(null, 10, 20)();    // result is 30, bind does not invoke function directly, instead, it return a new function,
                             // we can invoke the new function with (), .call(), .bind()


// 4.1.4 this
// this is unlnerable is javascript
let x = {
  a() {
    console.log(this);
  }
};

x.a();  // { a: [Function: a] }, this is object x

let a = x.a;
a();    // undefined

