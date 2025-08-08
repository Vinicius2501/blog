import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzelDb } from '.';
import { PostsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzelDb.insert(PostsTable).values(posts);
  } catch (e) {
    console.log(e);
  }

  const result = drizzelDb.select().from(PostsTable);

  console.log(result);
})();
