//intersection type #############################################################
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
// same of implementing multiple interfaces
type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//Guards #############################################################
const myName: string = 'matt';
const checkType: boolean = typeof myName === 'string';

type UnknownEmployee = Employee | Admin;
const printInfo = (emp: UnknownEmployee): void => {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log(emp.privileges);
  }
};

class Car {
  drive() {
    console.log('driving a car');
  }
}

class Truck {
  drive() {
    console.log('driving a truck');
  }
  loadCargo(amount: number) {
    console.log('Loading a cargo... ' + amount);
  }
}
//best one
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle: Vehicle): void => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

//Type casting #############################################################
const demo = '1';
//this is a stupid example but as is the syntax for casting
let d = demo as string;

//Index type: we want a type to store x number of properties without knowing the property name
interface ErrorContainer {
  //{email: 'not valid', username: 'Must start with capital letter'}
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: 'not valid',
  username: 'Must start with capital letter',
};

//chanable optional
const fetchedUserData = {
  id: '1',
  name: 'Max',
  //job: { title: 'CEO', description: 'my own company' },
};
console.log(etchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?title);

//Nullish Coalescing
//check if it is null or undefined or empty and replace the value with default
const userInput = null;
const storedData = userInput || 'DEFAULT';

//check if it is null or undefined and replace the value with default
const userInput2 = '';
const storedData2 = userInput ?? 'DEFAULT';