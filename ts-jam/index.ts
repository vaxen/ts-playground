import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;
  logToDo(todo);
});

const logToDo = (todo: Todo) => {
  const { title, id, completed } = todo;
  console.log(`id:${id} title: ${title} completed: ${completed}`);
};
