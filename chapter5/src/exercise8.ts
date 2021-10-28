export default null;

// 5.4.3 use abstract class or interface
// interface are more general and light weight, but the abstract class
// has more functionality

// (1) Interface is used to declare object structure, including object, array,
// function, class etc. Interface does not generate js code, just persist during compile time

// (2) Abstract class can build modal for classes, and it will generate js code in dist file, namely js class.
// Abstract class can have a constructor providing a default implementation, and set modifier to properties
// and methods. All of these traits cannot be implemented in interface.


// 5.5 class is structrual type
// (1) typescript compare whether two classes are the same, only compare their structure, not their class name
class Zebra {
  trot() {
    // ...
    console.log('zebra trot');
  }
}

class Poodle {
  trot() {
    // ...
    console.log('poodle trot');
  }
}

function ambleAround(animal: Zebra) {
  animal.trot();
}

// 使用 new 进行实例化，有没有括号都可以
ambleAround(new Zebra()); // zebra trot
ambleAround(new Poodle);  // poodle trot

// (2) with modifier
class A {
  private x = 1;
}

class B extends A {
}

function fn(a: A) {}

fn(new A);  // OK
fn(new B);  // OK

// fn({x: 1}); // Error: Property 'x' is private in type 'A' but not in type '{x: number}'
