import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect Users table and perform business operations
 */
@Injectable()
export class UsersService {
  /**
   *  Constructor to inject AuthService
   * @param authService
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   *The method to get all users from database
   * @param limit
   * @param page
   * @returns
   */
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

  /**
   *The method to get user by id
   * @param id
   * @returns
   */
  public findOneById(id: string) {
    return {
      name: 'John Doe',
      email: 'jonh@doe.com',
    };
  }
}
