// stores/UserStore.ts
import { makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

class UserStore {
  username: string = '';
  isLoggedIn: boolean = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setUsername(name: string) {
    this.username = name;
  }

  setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }

  login(username: string) {
    this.setUsername(username);
    this.setLoggedIn(true);
  }

  logout() {
    this.setUsername('');
    this.setLoggedIn(false);
  }
}

export default UserStore;
