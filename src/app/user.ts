import { ACCESS_LEVEL } from './constants/constants';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    access_level: ACCESS_LEVEL;
    username: string;
    password: string;
  }