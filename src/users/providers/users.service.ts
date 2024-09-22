import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../dtos/create-user.dto';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { User } from '../user.entity';

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
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) throw new ConflictException('Email already exists');

    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);

    return newUser;
  }

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
   * Public method used to find one user using the ID of the user
   */
  public async findOneById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
}
