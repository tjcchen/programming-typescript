export {};

// 3.2.13 Enum
// (1)
enum Language {
  English,
  Spanish,
  Russian
}

console.log(Language.English, Language.Spanish, Language.Russian); // 0, 1, 2

// You can also specify enum value( Recommended )
enum Vehicle {
  Bus = 0,
  Car = 1,
  Truck = 2
}

let myFirstLanguage = Language.Russian;
let mySecondLanguage = Language['English'];

console.log(myFirstLanguage, mySecondLanguage); // 2, 0

// (2)
enum Language {
  Chinse = 100,
  Japanese = 200 + 300,
  Korean                 // value is 501, 1 number larger than 500
}

console.log(Language.Korean); // 501

// (3) enum can be string
enum Color {
  Red = '#c10000',
  Blue = '#007ac1',
  Pink = 0xc10050,
  White = 255
}

console.log(Color.Red, Color.Blue, Color.Pink, Color.White); // #c10000 #007ac1 12648528 255

// (4) dangerous behaviors
let a = Color.Red;         // Color
// let b = Color.Green;       // Error: property 'Green' does not exist on type 'typeof Color'
let c = Color[0];          // string
let d = Color[6];          // string(!!!)

console.log(a, c, d);      // #c10000 undefined undefined

// (5) safe subsets
// utilize 'const enum' to declare safe subsets 
const enum Dialect {
  French,
  Germany,
}

let aa = Dialect.French;    // valid key
// let bb = Dialect.English    // invalid key
// let cc = Dialect[0];        // invalid key. Error: A const enum number can only accessed using a string literal
// let dd = Dialect[6];        // invalid key. Error: A const enum number can only accessed using a string literal
