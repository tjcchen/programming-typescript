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
