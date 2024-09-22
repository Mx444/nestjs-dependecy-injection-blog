import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';

import { CreatePostsDto } from '../dtos/create-posts.dto';
import { Post } from '../post.entity';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Inject User Service
     */
    private readonly usersService: UsersService,

    /**
     * Inject Post Repository
     */
    @InjectRepository(Post)
    private postRepository: Repository<Post>,

    /**
     * Inject Meta Options Repository
     */
    @InjectRepository(MetaOption)
    public readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  /**
   * Creating new post
   */
  public async create(@Body() createPostDto: CreatePostsDto) {
    // Create post
    let post = this.postRepository.create(createPostDto);

    return await this.postRepository.save(post);
  }

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    let posts = await this.postRepository.find();
    return posts;
  }

  public async delete(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });

    await this.postRepository.delete(id);

    await this.metaOptionsRepository.delete(post.metaOptions.id);

    return { message: 'Post deleted successfully', id };
  }
}
