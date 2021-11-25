import { User } from './User';
//if u export default no curly braces, but don use it import blabla from ..
import { Company } from './Company';
import { CustomMap } from './CustomMap';

console.log('inside index of maps project');

const dummyUser = new User();
const dummyCompany = new Company();

console.log(dummyUser);
console.log(dummyCompany);
const map = new CustomMap('map');
map.addMarker(dummyUser);
map.addMarker(dummyCompany);
