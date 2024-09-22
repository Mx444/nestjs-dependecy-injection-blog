import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { In, Repository } from 'typeorm';
import { Tag } from '../tags.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  public async create(createTagDto: CreateTagDto) {
    let tag = this.tagRepository.create(createTagDto);
    return await this.tagRepository.save(tag);
  }

  public async findMultipleTags(tags: number[]) {
    let result = await this.tagRepository.find({
      where: {
        id: In(tags),
      },
    });
    return result;
  }

  public async delete(id: number) {
    await this.tagRepository.delete(id);
    return { message: 'Tag deleted successfully', id };
  }

  public async softDelete(id: number) {
    await this.tagRepository.softDelete(id);
    return { message: 'Tag soft deleted successfully', id };
  }
}
