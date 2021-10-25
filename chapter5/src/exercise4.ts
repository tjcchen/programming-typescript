export default null;

// 5.4 interface
// Similar to type alias, interface has the same functionality.
// Their similarity just like function expression and function declaration.

// (1) type alias and interface
type Sushi1 = {
  calories: number
  salty: boolean
  tasty: boolean
};

interface Sushi2 {
  calories: number
  salty: boolean
  tasty: boolean
};

type Cake = {
  calories: number
  sweet: boolean
  tasty: boolean
};

// (2) type alias and interface inheritance
// (2.1) type alias uses intersection operator, eg: '&'
type Food = {
  calories: number
  tasty: boolean
};

type Cheese = Food & {
  salty: boolean
};

type Banana = Food & {
  sweet: boolean
};

let banana: Banana = {
  calories: 100,
  tasty: true,
  sweet: false
};

// (2.2) interface uses 'extends' key word
interface Person {
  walk: string
  speak: string
}

interface Teacher extends Person {
  teach: boolean
}

interface Student extends Person {
  learn: boolean
}

let student: Student = {
  walk: 'walk',
  speak: 'Japanese',
  learn: true
};

console.log(student.speak); // Japanese
