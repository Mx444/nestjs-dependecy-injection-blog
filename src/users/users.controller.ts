import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Req,
  Ip,
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(id + ' ' + typeof id);
    console.log(limit + ' ' + typeof limit);
    console.log(page + ' ' + typeof page);
    return 'Yuo sent a get request to users endpoint';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'Yuo sent a post request to users endpoint';
  }
}
