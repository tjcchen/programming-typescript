export default null;

// 5.4.1 Declaration Combination
// (1)
interface User {
  name: string
}

interface User {
  // name: number   // note: the property in interface cannot have confliction, that is to say, cannot declare a property twice
  age: number
}

// When use implement User, we need to declare name and age.
// Since the interface combined into one.
let a: User = {
  name: 'Ashley',
  age: 30
};

// (2)
type Person = {
  name: string
};

// Error: Duplicate identifier 'Person'
// type Person = {
//   age: number
// };

// (3)
// if we use generic in interface, the signature of the same name interface must be the same
interface Student<Age extends number> {
  age: Age
}

interface Student<Age extends number> {
  name: string
}