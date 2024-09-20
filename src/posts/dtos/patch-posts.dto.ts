import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostsDto } from './create-posts.dto';

export class PatchPostsDto extends PartialType(CreatePostsDto) {
  @ApiProperty({ description: 'The id of the post' })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
