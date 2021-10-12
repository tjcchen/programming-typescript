export {};

// 4.2.4 generic alias
// (1) define a event type, which is used to describe click, or mousedown event
type MyEvent<T> = {
  target: T
  type: string
};

// The target of MyEvent point to a HTMLElement
type ButtonEvent = MyEvent<HTMLButtonElement | null>;
// implementation
let myEvent: ButtonEvent = {
  target: document.querySelector('#myButton'),
  type: 'click'
};


