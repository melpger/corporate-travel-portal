import { ACCESS_LEVEL, Constants } from './constants/constants';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user_cache: User;
  private userURL = Constants.USER_API_ENDPOINT; // URL to web api

  constructor() { }

  getUser() {
    return this.user_cache;
  }

  dummy() {
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length>0) {
      console.log(localStorage)
      return;
    }

    const userlist = [
      {id: 1, firstName:'Melvin', lastName:'Geremillo', username:'melpger1', password:'melpger1', access_level:ACCESS_LEVEL.ACCESS_LEVEL_EMPLOYEE},
      {id: 2, firstName:'Poy', lastName:'Geremillo', username:'melpger2', password:'melpger2', access_level:ACCESS_LEVEL.ACCESS_LEVEL_MANAGER},
      {id: 3, firstName:'melpger', lastName:'Geremillo', username:'melpger3', password:'melpger3', access_level:ACCESS_LEVEL.ACCESS_LEVEL_FINANCE_MANAGER},
      {id: 4, firstName:'poy poy', lastName:'Geremillo', username:'melpger4', password:'melpger4', access_level:ACCESS_LEVEL.ACCESS_LEVEL_EMPLOYEE},
      {id: 5, firstName:'Manager', lastName:'Poy', username:'melpger5', password:'melpger5', access_level:ACCESS_LEVEL.ACCESS_LEVEL_MANAGER},
    ];

    users.push(userlist[0]);
    users.push(userlist[1]);
    users.push(userlist[2]);
    users.push(userlist[3]);
    users.push(userlist[4]);
    localStorage.setItem('users', JSON.stringify(users));

    console.log(localStorage)
  }
}
