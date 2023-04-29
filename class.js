class Person {
  constructor(name, surname, age, dog) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dog = dog;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old. I'm with my little ${this.dog}.`);
  }
}

const person1 = new Person("Zukisa", "Maza", 22, "Maylo");
const person2 = new Person("Bob", "Marley", 11, "Cartel");

person1.sayHello();
person2.sayHello();


class Employee extends Person {
    constructor(name, surname, age, dog, jobTitle) {
      super(name, surname, age, dog);
      this.jobTitle = jobTitle;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} ${this.surname}, I am ${this.age} years old, I'm with my little ${this.dog}, and I am a ${this.jobTitle}.`);
    }
  }
  
  const employee1 = new Employee("Zukisa", 30, "Maylo", "Software Developer");
employee1.sayHello();
employee1.introduce();
