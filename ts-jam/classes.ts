class Vehicle {
  //color: string;
  constructor(public color: string) {
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

const honda = new Car(4,'red');

honda.startDrivingProcess();
console.log(honda.color);
console.log(honda.wheels);
