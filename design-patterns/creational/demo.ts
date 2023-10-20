import { Person, PersonBuilder } from './builder';
import { Chair, ConcreteModernFactory, ConcreteVintageFactory } from './abstractFactory';

//builder
const person1 : Person = new PersonBuilder('Matt')
                .withAddress('1234')
                .withPhone('2344')
                .withAge(44)
                .build()

//abstract factory
const chairModern : Chair = new ConcreteModernFactory().createChair();
const tableVintage = new ConcreteVintageFactory().createTable();
console.log(chairModern.sit());
console.log(tableVintage.putObject());

 