// 4.1.9 function type reloading
// (1)
type CreateElement = {
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: 'table'): HTMLTableElement
  (tag: string): HTMLElement
};

// let createElement: CreateElement = (tag: 'a' | 'canvas' | 'table' | string): HTMLElement => {
// };

// Note: the return value needs to be compatible with HTMLAnchorElement, HTMLCanvasElement, HTMLTableElement, HTMLElement
// const createElement: CreateElement = (tag: string): HTMLElement => {
//   let divElmt = document.createElement(tag);
//   return divElmt;
// };


// (2) [important] function reloading
// function createElement(tag: 'a'): HTMLAnchorElement
// function createElement(tag: 'canvas'): HTMLCanvasElement
// function createElement(tag: 'table'): HTMLTableElement 
// function createElement(tag: string): HTMLElement {
//   let htmlElement = document.createElement(tag);
//   return htmlElement;
// }

// let aTag = createElement('a');
// console.log(aTag);


// (3) describe type functions and properties
// function warnUser(warning) {
//   if (warnUser.wasCalled) {
//     return;
//   }
//   warnUser.wasCalled = true;
//   alert(warning);
// }
// warnUser.wasCalled = false;

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
};

const warnUser: WarnUser = (warning: string) => {
  if (warnUser.wasCalled) {
    return;
  }
  warnUser.wasCalled = true;
  alert(warning);
};

warnUser.wasCalled = false;
warnUser('Hello TypeScript!');