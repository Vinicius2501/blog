import { PostModel } from '@/models/post/post-models';

export type PublicPost = Omit<PostModel, 'updatedAt'>;

export const makePublicPostFromDb = (post: PostModel): PublicPost => {
  return makePublicEmptyPost(post);
};

export const makePublicEmptyPost = (post?: Partial<PostModel>): PublicPost => {
  return {
    id: post?.id || '',
    slug: post?.slug || '',
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    author: post?.author || '',
    content: post?.content || 'Começe a *digitar*',
    coverImageUrl: post?.coverImageUrl || '',
    createdAt: post?.createdAt || '',
    published: post?.published || false,
  };
};
