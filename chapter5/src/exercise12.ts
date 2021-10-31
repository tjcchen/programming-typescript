export default null;

// 5.8 mixin
// TypeScript does not support trait or mixin key words, but we can implement it by ourself
// trait and mixin are used to emulate [multiple inheritances], namely a class can extend two or more classes,
// and we can use it to do Role Oriented Programming.
type ClassContructor<T> = new(...args: any[]) => T;

function withEZDebug<C extends ClassContructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class {
    constructor(...args: any[]) {
      super(...args);
    }

    debug() {
      let name = Class.constructor.name;
      let value = this.getDebugValue();
      return name + `( ${JSON.stringify(value)} )`;
    }
  };
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}

  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    };
  }
}

let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
let retVal = user.debug();

console.log(retVal); // Function( {"id":3,"name":"Emma Gluzman"} )
