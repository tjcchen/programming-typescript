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


// Union VS Intersection
// Union is more useful in most cases
type Returns = string | null;

function trueOrNull(isTrue: boolean): Returns {
  if (isTrue) {
    return 'true';
  }
  return null;
}

function aOrB(a: string, b: number): string | number {
  return a || b;
}

// =====================================================================
// [important]
// If we have a value that is a union type,
// we can only access members that are common to all types in the union.
// =====================================================================

// Extra example
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// Only available in one of the two possible types
// pet.swim();