export default null;

// 5.6 implement a simple StringDatabase
type State = {
  [key: string]: string
};

// interface declaration
interface StringDatabase {
  state: State;
  get(key: string): string | null;
  set(key: string, value: string): void;
}

// constructor declaration
interface StringDatabaseConstructor {
  // new(): StringDatabase; // constructor signature
  new(state?: State): StringDatabase
  from(state: State): StringDatabase
}

// class delcaration
class StringDatabase implements StringDatabase {
  // state: State = {};

  constructor(public state: State = {}) {}

  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }

  set(key: string, value: string): void {
    this.state[key] = value;
  }

  static from(state: State): StringDatabase {
    let db = new StringDatabase;
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}

//================
// test section
//================
let db1 = StringDatabase.from({
  id: '01',
  name: 'jackie',
  age: '28',
  occupation: 'student',
});

// output
// StringDatabase {
//   state: { id: '01', name: 'jackie', age: '28', occupation: 'student' }
// }
console.log(db1);

let database = new StringDatabase();
database.set('name', 'jimmy');
console.log(database.get('name')); // jimmy
