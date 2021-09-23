export {};

// const enum
const enum Flippable {
  Burger,
  Chair,
  Cup,
  Stateboard,
  Table
}

function flip(f: Flippable) {
  return 'flipped it';
}

flip(Flippable.Chair);    // 'flipped it'
flip(Flippable.Cup);      // 'flipped it'
flip(12);                 // 'flipped it' (!!!), this will cause error

// Correct usage of const enum
// we can not use number index or string index to retrieve flip value
const enum Flippable2 {
  Burger = 'Burger',
  Chair = 'Chair',
  Cup = 'Cup',
  Skateboard = 'Skateboard',
  Table = 'Table'
}

function flip2(f: Flippable2) {
  return 'flipped it';
}

flip2(Flippable2.Chair);      // 'flipped it'
flip2(Flippable2.Cup);        // 'flipped it'
// flip2(12);                    // Error: Argument of type '12' is not assignable to parameter of type 'Flippable'
// flip2('Hat');                 // Error: Argument of type 'Hat' is not assignable to parameter of type 'Flippable'
