export {}

// (1) identifier (readonly, ?)
let user: {
  readonly firstName: string
} = {
  firstName: 'abby'
};

console.log(user.firstName);

// user.firstName = 'abbey with an e'; // Error, cannot assign to 'firstName' because it is a read-only property

// (2) please do not use empty object
let danger: {};
danger = {};
danger = {x: 1};
danger = [];
danger = 2;
// danger = null;            // cannot assign null to empty object
// danger = undefined;       // cannot assign undefined to empty object