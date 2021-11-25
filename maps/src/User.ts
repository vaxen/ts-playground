import faker from 'faker';
import { Location } from './Location';
import { Mappable } from './Mappable';

export class User implements Mappable {
  name: string;
  location: Location;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div><h2>Username: ${this.name}</h2></div>`;
  }
}
