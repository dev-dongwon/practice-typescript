interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name : "tuna",
  gender: "Male",
  age: 31
}

const sayHi = (person: Human) => {
  console.log(`Hello, ${person.name}, you are ${person.age}, ${person.gender}`)
}

sayHi(person);

export {};