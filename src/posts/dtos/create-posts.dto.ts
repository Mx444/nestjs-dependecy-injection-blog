import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-metaoptions.dto';
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';

export class CreatePostsDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'This is a post title',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({ enum: postType, description: 'The type of the post' })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    description: 'The slug of the post',
    example: 'this-is-a-slug',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and use only "-" and without spaces. Example: "this-is-a-slug"',
  })
  slug: string;

  @ApiProperty({ enum: postStatus, description: 'The status of the post' })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: 'The content of the post',
    example: 'This is the content of the post',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'The schema of the post',
    example: '{"type": "object", "properties": {"name": {"type": "string"}}}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'The url of the featured image',
    example: 'https://example.com/featured-image.jpg',
  })
  @IsOptional()
  @MaxLength(1024)
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The date the post was published',
    example: '2021-01-01T00:00:00Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of tag ids',
    example: [1, 2],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tags?: number[];

  @ApiPropertyOptional({
    type: 'object',
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'The metavalue is a JSON string',
          example: '{"sidebarEnabled": true}',
        },
      },
    },
    required: false,
    description: 'The meta options for the post',
    example: [{ key: 'key1', value: 'value1' }],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto | null;

  @ApiProperty({
    type: 'integer',
    required: true,
    description: 'The author id of the post',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  authorId: number;
}
