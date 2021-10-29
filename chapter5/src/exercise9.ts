export default null;

// 5.6 class declare both its value and its type
// - value namespace
// - type namespace

// (1) In typescript, value and type are located in different namespaces
// value
let a = 9999;
function b() {}

// type
type a = number;
interface b {
  (): void
};

if (a + 1 > 3) {}  // a is value a, according to context
let x: a = 9999;   // a is type a, according to context


// (2) class and enum can not only generate type in type namespace,
// but also value in value namespace
class C {}
let c: C  // instance type of class C
= new C;  // value of class C

enum E {F, G};
let e: E  // enum type of Enum E
= E.F;    // enum value of Enum E



