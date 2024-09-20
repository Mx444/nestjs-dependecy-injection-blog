import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostsMetaOptionsDto {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  value: any;
}
