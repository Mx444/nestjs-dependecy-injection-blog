import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { dir } from 'console';
import { dirname } from 'path';
import { Tag } from './tags/tags.entity';
import { MetaOption } from './meta-options/meta-option.entity';
import { TagsService } from './tags/providers/tags.service';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        // entities: [User, Tag, MetaOption],
        autoLoadEntities: true,
        synchronize: true,
        logging: process.env.DB_LOGGING === 'true',
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],

  controllers: [AppController],
  providers: [AppService, TagsService],
})
export class AppModule {}
