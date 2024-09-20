import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    console.log(userId);
    return [
      {
        userId: user,
        title: 'Post 1',
        content: 'Post 1 content',
      },
      {
        title: 'Post 2',
        content: 'Post 2 content',
      },
    ];
  }
}
