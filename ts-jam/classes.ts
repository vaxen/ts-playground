import faker from 'faker';
//inheritance
class Vehicle {
  //color: string;
  private readonly id;
  constructor(public color: string) {
    this.id = 1;
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
    this.wheels = wheels;
  }

  drive(): void {
    console.log("I'm driving");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const honda = new Car(4, 'red');

honda.startDrivingProcess();
console.log(honda.color);
console.log(honda.wheels);

//GETTER and SETTER
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age: number) {
    this.age = age;
  }

  //static method or property
  static createPerson(): Person {
    return new Person(faker.name.firstName(), 4);
  }
}

const person: Person = new Person('Mattia', 30);
console.log(person.getName);
person.setName = 'Mark';
console.log(person.getName);

const randomPerson = Person.createPerson();
console.log(randomPerson);

//Abstract classes
abstract class Character {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract printMyName(): void;
}

class Orc implements Character {
  name: string;
  printMyName(): void {
    console.log('Woaoaoa');
  }
}

//singleton
class Option {
  private isEnable;
  private static instance: Option;

  private constructor(isEnable: boolean) {
    this.isEnable = isEnable;
  }

  static getInstance() {
    if (Option.instance) {
      return this.instance;
    }
    this.instance = new Option(true);
    return this.instance;
  }
}

const singletonOption: Option = Option.getInstance();
