import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        name: 'John Doe',
        email: 'jonh@doe.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane@doe.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      name: 'John Doe',
      email: 'jonh@doe.com',
    };
  }
}
