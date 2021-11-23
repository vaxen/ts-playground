//primitive value
let apples: number = 5;
apples = 8;

let speed: string = 'fast';
let hasName: boolean = false;

let nothing: null = null;

//built in object
const now: Date = new Date();

//array
let colors: string[] = ['red', 'blue'];
let numbers: number[] = [1, 2, 3];

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 43,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let booleanOrNumber: boolean | number = 4;
booleanOrNumber = false;

//when to use annotations
//1) Function that returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

//2) when we declae a variable in a different line
let dummy: number;
dummy = 3;
