import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  private token: string;
  constructor() { }

  setterUser(user: User) {
    this.user = user;
  }

  getterUser() {
    return this.user;
  }

  setterToken(token: string) {
    this.token = token;
  }

  getterToken() {
    return this.token;
  }

}
