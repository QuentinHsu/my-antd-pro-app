// stores/TodoStore.ts
import { makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoStore {
  todos: Todo[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  get todoCount() {
    return this.todos.length;
  }

  get completedCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }
}

export default TodoStore;
