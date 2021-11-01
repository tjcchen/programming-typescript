export default null;

// 5.9 Decorator[ experimental ]
// A decorator is a gramma that is used for invoking a function on target,
// target including class, class method, property, and regular method.

type ClassContructor<T> = new(...args: any[]) => T;

class Payload {}

@serializable
class APIPayload {
  getValue(): Payload {
    return new Payload();
  }
}

function serializable<
  T extends ClassContructor<{
    getValue(): Payload
  }>
>(Constructor: T) {
  return class extends Constructor {
    serialize() {
      return this.getValue().toString();
    }
  }
}

let payload = new APIPayload
// let serialized = payload.serialize(); 