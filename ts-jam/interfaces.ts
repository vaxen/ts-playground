interface Car {
  name: string;
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
