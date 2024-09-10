import { makeAutoObservable } from 'mobx';
import UserStore from './modules/UserStore';
import TodoStore from './modules/TodoStore';

class RootStore {
  userStore: UserStore;
  todoStore: TodoStore;

  constructor() {
    makeAutoObservable(this);
    this.userStore = new UserStore(this);
    this.todoStore = new TodoStore(this);
  }
}

export default RootStore;
