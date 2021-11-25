import faker from 'faker';
import { Location } from './Location';
import { Mappable } from './Mappable';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h2>Company name: ${this.name}</h2>
      <h3>Motto: ${this.catchPhrase}</h3>
    </div>`;
  }
}
