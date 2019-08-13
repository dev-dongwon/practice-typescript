export class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): string {
    return `Hello, ${this.name} `;
  }

  printHello(): void {
    console.log(this.sayHello());
  }
}

const person = new Person('tuna');
person.printHello();