import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';

import { CreatePostsDto } from '../dtos/create-posts.dto';
import { Post } from '../post.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostsDto } from '../dtos/patch-posts.dto';

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
    private readonly metaOptionsRepository: Repository<MetaOption>,

    /**
     * Inject Tag Repository
     */
    private readonly tagService: TagsService,
  ) {}

  /**
   * Creating new post
   */
  public async create(@Body() createPostDto: CreatePostsDto) {
    let author = await this.usersService.findOneById(createPostDto.authorId);
    let tags = await this.tagService.findMultipleTags(createPostDto.tags);
    // Create post
    let post = this.postRepository.create({ ...createPostDto, author, tags });
    return await this.postRepository.save(post);
  }

  public async findAll(userId: number) {
    return await this.postRepository.find({
      relations: {
        metaOptions: true,
        //author: true
        //tags: true,
      },
    });
  }

  public async update(patchPostDto: PatchPostsDto) {
    let tags = await this.tagService.findMultipleTags(patchPostDto.tags);

    let post = await this.postRepository.findOneBy({
      id: patchPostDto.id,
    });

    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    post.tags = tags;

    return await this.postRepository.save(post);
  }

  public async delete(id: number) {
    await this.postRepository.delete(id);

    return { message: 'Post deleted successfully', id };
  }
}
