import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { PatchPostsDto } from './dtos/patch-posts.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  public createPosts(@Body() createPostsDto: CreatePostsDto) {
    console.log(createPostsDto);
    return 'You sent a post request to posts endpoint';
  }

  @Patch()
  @ApiOperation({ summary: 'Update a post' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully updated.',
  })
  public updatePosts(@Body() patchPostsDto: PatchPostsDto) {
    console.log(patchPostsDto);
    return 'You sent a patch request to posts endpoint';
  }
}
