export class PersonBuilder {
  private name: string;
  private age?: number;
  private phone?: string;
  private address?: string;

  constructor(name: string) {
    this.name = name;
  }

  public withAge(age: number) {
    this.age = age;
    return this;
  }

  public withPhone(phone: string) {
    this.phone = phone;
    return this;
  }

  public withAddress(address: string) {
    this.address = address;
    return this;
  }

  get Name() {
    return this.name;
  }
  get Age() {
    return this.age;
  }
  get Phone() {
    return this.phone;
  }
  get Address() {
    return this.address;
  }

  build(){
    return new Person(this);
  }
}

export class Person {
  private name: string;
  private age?: number;
  private phone?: string;
  private address?: string;

  constructor(builder: PersonBuilder) {
    this.name = builder.Name;
    this.age = builder.Age;
    this.phone = builder.Phone;
    this.address = builder.Address;
  }

  get Name() {
    return this.name;
  }
  get Age() {
    return this.age;
  }
  get Phone() {
    return this.phone;
  }
  get Address() {
    return this.address;
  }
}

//DEMO
const person1 : Person = new PersonBuilder('Matt')
                .withAddress('1234')
                .withPhone('2344')
                .withAge(44)
                .build()
