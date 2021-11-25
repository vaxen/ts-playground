interface Car {
import { User } from '../../../../Downloads/maps/src/User';
  readonly name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Hello ${this.name}!`;
  },
};

const printCar = (car: Car): void => {
  console.log(car.summary());
};

printCar(oldCivic);

interface Runnable {
  value: string;
}

// one interface can extend other interfaces
interface Readable extends Runnable {
  isReadable: boolean;
}

class User implements Readable,Runnable{
  value: string;
  type?: string;
  isReadable: boolean;

}