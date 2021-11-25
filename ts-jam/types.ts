const today = new Date();

type Combinable = number | string;

let numberOrString: Combinable;

//uknown better than any as a type

//example of never type
const generateError = (message: string, code: number): never => {
  throw { message: message, code: code };
};
