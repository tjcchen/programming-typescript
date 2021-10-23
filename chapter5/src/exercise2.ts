// 5.2 super
// NB: super can only access parent method, instead of property
class Person {
  constructor(
    protected name: string,
    protected age: number
  ) {}

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Teacher extends Person {
  constructor(public name: string) {
    super(name, 28);
  }

  getName() {
    return 'Teacher ' + super.getName();
  }
}

const teacher = new Teacher('jackie');
console.log(teacher.getName()); // Teacher jackie
console.log(teacher.getAge());  // 28