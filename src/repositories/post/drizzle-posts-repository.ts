import { PostModel } from '@/models/post/post-models';
import { PostRepository } from './post-repository';
import { drizzelDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';

export class DrizzlePostsRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    logColor('findAll', Date.now());

    const posts = await drizzelDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    logColor('findAllPublic', Date.now());

    const posts = await drizzelDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    logColor('findById', Date.now());
    const post = await drizzelDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });

    if (!post) throw new Error('Post não encontrado por ID');

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    logColor('findBySlugPublic', Date.now());

    const post = await drizzelDb.query.posts.findFirst({
      where: (post, { eq, and }) =>
        and(eq(post.slug, slug), eq(post.published, true)),
    });

    if (!post) throw new Error('Post não encontrado por Slug');

    return post;
  }
}
