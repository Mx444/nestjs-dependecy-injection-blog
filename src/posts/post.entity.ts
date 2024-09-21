import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePostsMetaOptionsDto } from './dtos/create-posts-metaoptions.dto';
import { postType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 512, nullable: false })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    default: postType.POST,
    nullable: false,
  })
  postType: postType;

  @Column({ type: 'varchar', length: 256, unique: true, nullable: false })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    default: postStatus.DRAFT,
    nullable: false,
  })
  status: postStatus;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ type: 'text', nullable: true })
  schema?: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  featuredImageUrl?: string;

  @Column({ type: 'timestamp', nullable: true })
  publishOn?: Date;

  tags?: string[];

  metaOptions?: CreatePostsMetaOptionsDto[];
}
