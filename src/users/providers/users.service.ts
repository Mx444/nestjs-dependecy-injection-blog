import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getUsers() {
    return 'You sent a get request to users endpoint 🚀';
  }

  public createUsers() {
    return 'You sent a post request to users endpoint 🚀';
  }
}
