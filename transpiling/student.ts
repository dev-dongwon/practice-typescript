import { Person } from './person';

class Student extends Person {
  study(): string {
    return `${this.name} is stduying now`;
  }

  codeing(): string {
    return `${this.name} is now coding`;
  }
}

const student = new Student('tuna');
console.log(student.codeing());