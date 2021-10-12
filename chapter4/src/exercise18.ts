export {};

// 4.2.4 generic alias
// (1) define a event type, which is used to describe click, or mousedown event
type MyEvent<T> = {
  target: T
  type: string
};

// (1.1) The target of MyEvent point to a HTMLElement
type ButtonEvent = MyEvent<HTMLButtonElement | null>;
// implementation
let myEvent: ButtonEvent = {
  target: document.querySelector('#myButton'),
  type: 'click'
};

// (1.2)
let yourEvent: MyEvent<HTMLDivElement | null> = {
  target: document.querySelector('#myDiv'),
  type: 'mousedown'
};

// (2) use MyEvent on other type, eg: TimedEvent<T>
type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
};

let timedEvent: TimedEvent<HTMLButtonElement | null> = {
  event: {
    target: document.querySelector('#myButton'),
    type: 'click'
  },
  from: new Date(),
  to: new Date()
};

// (3) use MyEvent on function signature
function triggerEvent<T>(event: MyEvent<T>): void {
  // write some code logic ...
}

triggerEvent({ // T is Element or null
  target: document.querySelector('#myButton'),
  type: 'mouseover'
});


triggerEvent<HTMLButtonElement | null>({ // specify T explicitly
  target: document.querySelector('#myButton'),
  type: 'mouseover'
});

