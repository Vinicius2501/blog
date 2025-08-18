import { PostModel } from '@/models/post/post-models';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;

  //Mutations
  createPost(post: PostModel): Promise<PostModel>;
  updatePost(
    id: string,
    newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel>;
  deletePost(id: string): Promise<PostModel>;
}
