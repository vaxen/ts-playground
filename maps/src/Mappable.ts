import { Location } from './Location';

export interface Mappable {
  location: Location;
  markerContent(): string;
}
