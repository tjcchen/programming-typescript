export {}

// (1) identifier
let user: {
  readonly firstName: string
} = {
  firstName: 'abby'
};

console.log(user.firstName);

// user.firstName = 'abbey with an e'; // Error, cannot assign to 'firstName' because it is a read-only property
