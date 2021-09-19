// Union and Intersection
export {}

// (1)
type Cat = { name: string, purrs: boolean };
type Dog = { name: string, barks: boolean, wags: boolean };
type CatOrDogOrBoth = Cat | Dog; // union
type CatAndDog = Cat & Dog;      // intersection

// union type
// Cat
let union: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
};

// Dog
union = {
  name: 'Domino',
  barks: true,
  wags: true,
};

// Both
union = {
  name: 'Donkers',
  barks: true,
  purrs: true,
  wags: false,
};

console.log(union.name); // Donkers, only name can be printed

// intersection type
// CatAndDog
let intersection: CatAndDog = {
  name: 'Domino',
  barks: true,
  purrs: false,
  wags: true,
};

// Domino true false true
console.log(intersection.name, intersection.barks, intersection.purrs, intersection.wags);

// =====================================================================
// [important]
// If we have a value that is a union type,
// we can only access members that are common to all types in the union.
// =====================================================================
