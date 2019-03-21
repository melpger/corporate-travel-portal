import { ACCESS_LEVEL } from './constants/constants';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user_cache: User;
  private userURL = 'api/users';  // URL to web api

  constructor() { }

  getUser() {
    return this.user_cache;
  }

  dummy() {
    this.user_cache =   {id: 1, firstName:'Melvin', lastName:'Geremillo', username:'melpger1', password:'melpger1', access_level:ACCESS_LEVEL.ACCESS_LEVEL_FINANCE_MANAGER};
  }
}
