import { PostModel } from '@/models/post/post-models';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;
}
