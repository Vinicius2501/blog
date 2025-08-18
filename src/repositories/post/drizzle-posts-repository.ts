import { PostModel } from '@/models/post/post-models';
import { PostRepository } from './post-repository';
import { drizzelDb } from '@/db/drizzle';
import { PostsTable } from '@/db/drizzle/schemas';
import { eq } from 'drizzle-orm';

export class DrizzlePostsRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    const posts = await drizzelDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzelDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzelDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });

    if (!post) throw new Error('Post não encontrado por ID');

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzelDb.query.posts.findFirst({
      where: (post, { eq, and }) =>
        and(eq(post.slug, slug), eq(post.published, true)),
    });

    if (!post) throw new Error('Post não encontrado por Slug');

    return post;
  }

  async createPost(post: PostModel): Promise<PostModel> {
    const postsExists = await drizzelDb.query.posts.findFirst({
      where: (posts, { or, eq }) =>
        or(eq(posts.id, post.id), eq(posts.slug, post.slug)),
    });

    if (!!postsExists) throw new Error('Post com ID ou Slug já existente.');

    await drizzelDb.insert(PostsTable).values(post);
    return post;
  }

  async updatePost(
    id: string,
    newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel> {
    const postFormDb = await drizzelDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!postFormDb) throw new Error('Post não encontrado');

    const updatedAt = new Date().toISOString();

    const postData = {
      author: newPostData.author,
      content: newPostData.content,
      coverImageUrl: newPostData.coverImageUrl,
      excerpt: newPostData.excerpt,
      published: newPostData.published,
      title: newPostData.title,
      updatedAt: updatedAt,
    };

    await drizzelDb
      .update(PostsTable)
      .set(postData)
      .where(eq(PostsTable.id, id));

    return {
      ...postFormDb,
      ...postData,
    };
  }

  async deletePost(id: string): Promise<PostModel> {
    const post = await drizzelDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não existe');

    await drizzelDb.delete(PostsTable).where(eq(PostsTable.id, id));
    return post;
  }
}
