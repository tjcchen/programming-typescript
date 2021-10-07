// 4.2 polymorphism
// (1) filter implementation
function filter(array: any[], fn: Function) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (fn(item)) { // only push valid item
      result.push(item);
    }
  }
  return result;
}

// @ts-ignore
const retVal = filter([1, 2, 3, 4], _ => _ < 3);
console.log(retVal); // [1, 2]


// (2) filter ts implementation
type Filter = {
  (array: unknown, fn: unknown): unknown[]
}

// not working
type FilterSpecified = {
  (array: number[], fn: (item: number) => boolean): number[]
  (array: string[], fn: (item: string) => boolean): string[]
  (array: object[], fn: (item: object) => boolean): object[]
};

// [perfect] working with generic
type FilterGeneric = {
  <T>(array: T[], fn: (item: T) => boolean): T[]
};

let filterGeneric: FilterGeneric = (array, fn) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

let names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin' },
];

let result = filterGeneric(
  names,
  _ => _.firstName.startsWith('b')
);

console.log(result[0].firstName); // beth
