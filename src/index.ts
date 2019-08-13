class Human {
  public name: string;
  private age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const tuna = new Human("tuna", 25, "Male");

const sayHi = (person: Human): string => {
  return `Hello, ${person.name}, you are ${person.age}, ${person.gender}`;
}

sayHi(tuna);

export {};