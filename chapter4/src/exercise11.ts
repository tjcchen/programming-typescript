// 4.1.9 function type reloading
type CreateElement = {
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: 'table'): HTMLTableElement
  (tag: string): HTMLElement
};

// let createElement: CreateElement = (tag: 'a' | 'canvas' | 'table' | string): HTMLElement => {
// };

// let createElement: CreateElement = (tag: string): HTMLElement => {
//   let divElmt = document.createElement(tag);
//   return divElmt;
// };


// function reloading
function createElement(tag: 'a'): HTMLAnchorElement
function createElement(tag: 'canvas'): HTMLCanvasElement
function createElement(tag: 'table'): HTMLTableElement 
function createElement(tag: string): HTMLElement {
  let htmlElement = document.createElement(tag);
  return htmlElement;
}

let aTag = createElement('a');
console.log(aTag);
