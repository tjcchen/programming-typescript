export default {}
// 5.4 Difference between type alias and interface

// (1) type alias is more general, the right part of '=' can be any type.
// However, the right part of interface must be object structure

// the following type alias example cannot be rewriteen with interface
type A = number;
type B = A | string;

// (2) interface will check whether subinterface follow parent rule, when the condition is not meet,
// it will cast error. But the type alias will do whatever it can to prevent this, like when we use '&' operator
interface C {
  good(x: number): string
  bad(x: number): string
}

interface D extends C {
  good(x: string | number): string
  // Error: Interface 'B' incorrectly extends interface 'A'. Type number is not assignable to type string.
  // bad(x: string): string
}

// (2.1) type alias version works perfectly
type E = {
  good(x: number): string
  bad(x: number): string
}

type F = E & {
  good(x: number | string): string
  bad(x: string): string  // works
}

// apply type alias to class declaration
class Ring implements F {
  constructor() {}

  good(x: number | string): string {
    return '';
  }

  bad(x: number | string): string {
    return '';
  }
}

// (3) the same name interface in the same domain will be combined into one,
// but type alias will cast error
interface D {
  doMath(): boolean
  doCalculate(): void
}

// Thus, Phone will need to implement 4 methods
class Phone implements D {
  constructor() {}
  
  doMath(): boolean {
    return false;
  }

  doCalculate() {
    console.log('do calculate');
  }

  good(x: number | string): string {
    return '';
  }

  bad(x: number | string): string {
    return '';
  }
}

// Error: duplicate identifer F
// type F = {};