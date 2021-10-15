// 4.2.6 default type of generic
type MyEvent<T> = {
  target: T,
  type: string
};

// (1) explicitly added
let buttonEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myBtn'),
  type: 'click',
};

// (2) with default value
type MyEventEnhanced<T = HTMLElement | null> = {
  target: T,
  type: string
};

let divEvent: MyEventEnhanced = {
  target: document.querySelector('#myBtn'),
  type: 'mouseover'
};

// (3) important: specify T is an HTMLElement
type MyEventSpecified<T extends HTMLElement = HTMLElement> = {
  target: T,
  type: string
};

let bodyEvent: MyEventSpecified = {
  target: document.body,
  type: 'mouseout'
};

