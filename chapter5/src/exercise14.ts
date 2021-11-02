export default null;

// 5.1 enumlate final class
// (1) Adding final to class, this class cannot be extended.
// (2) Adding final to property, this property cannot be reassigned.
// (3) Adding final to method, this method cannot be override.

// (4) use private method to emulate final class
class MessageQueue {
  private constructor(
    private messages: string[]
  ) {}
  
  // We use staic to declare 'MessageQueue' to guarantee the class cannot be extended,
  // but it can be instantiated with 'create' method
  static create(messages: string[]) {
    return new MessageQueue(messages);
  }
}

// Error: Cannot extend a class 'MessageQueue',
// Class constructor is marked as private.

// class BadQueue extends MessageQueue{}

// Error: Constructor of class 'MessageQueue' is private and only accessible within the class declaration.
// new MessageQueue([]);

MessageQueue.create(['instantiated', 'with', 'static', 'create', 'method']);
