import { DrizzlePostsRepository } from './drizzle-posts-repository';
//import { JsonPostRepository } from './json-post-repository';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new DrizzlePostsRepository();
