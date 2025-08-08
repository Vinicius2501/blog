import { PostModel } from '@/models/post/post-models';
import { PostRepository } from './post-repository';

export class DrizzlePostsRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    throw new Error('Method not implemented.');
  }
  async findAllPublic(): Promise<PostModel[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
}
