import {
  IsArray,
  IsEnum,
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
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';
import { CreatePostsMetaOptionsDto } from './create-posts-metaoptions.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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
    description: 'The tags for the post',
    example: ['tag1', 'tag2'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(512, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          example: 'key1',
        },
        value: {
          type: 'any',
          example: 'value1',
        },
      },
    },
    required: false,
    description: 'The meta options for the post',
    example: [{ key: 'key1', value: 'value1' }],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostsMetaOptionsDto)
  metaOptions?: CreatePostsMetaOptionsDto[];
}
