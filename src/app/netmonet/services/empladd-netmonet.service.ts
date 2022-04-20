import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class EmpladdNetmonetService {

  userList: User[] = [];
  surname!: string;
  name!: string;
  tel!: string;

  saveUser(newUser: any) {
    const user: User = {
    name: this.name,
    surname: this.surname,
    tel: this.tel,
  };
    this.userList.push (user);
}
/*
  saveUser(newUser: any) {
    const user = newUser;
    user.name = newUser;
    user.surname = newUser;
    user.tel = newUser;
    this.userList.push (user);
  }
*/

  constructor() {
  }
}
