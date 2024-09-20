import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
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
