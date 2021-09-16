// comlicated ts object
export {}

// (1)
let a: {
  firstName: string;
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman'
};

// (2)
class Person {
  constructor(
    public firstName: string,  // public is the shorthand of this.firstName = firstName;
    public lastName: string,
  ){}
}

// (3) this is allowed, instantiate new Person to a
a = new Person('matt', 'smith'); // OK

console.log(a.firstName, a.lastName); // matt, smith

// (4)
let aa: {bb: number};
// aa = {};                // Error, Property 'b' is missing in type '{}' but required in type '{bb: number}'
// aa = {
//   bb: 1,
//   cc: 2,                // Error, Object literal may only specify unknown properties, and 'cc' does not exist in type '{bb: number}'
// }
