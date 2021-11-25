function merge<T, U>(obA: T, obB: U) {
  return Object.assign(obA, obB);
}

const mergedObj = merge({ name: 'Max' }, { age: 24 });
mergedObj.age;
mergedObj.name;

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  console.log(element.length);
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class MyStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new MyStorage<string>();
textStorage.addItem('text1');
textStorage.addItem('text2');
const numStorage = new MyStorage<number>();
numStorage.addItem(1);

//Partial Type
interface Lesson {
  title: string;
  subject: string;
}

const createLesson = (title: string, subject: string): Lesson => {
  let lesson: Partial<Lesson> = {};
  lesson.subject = 'math';
  lesson.title = 'math for dummies';
  return lesson as Lesson;
};

const numb: Readonly<number[]> = [1, 2];
