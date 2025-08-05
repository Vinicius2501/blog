import { PostModel } from '@/models/post/post-models';

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findOne(id: string): Promise<PostModel>;
}
