import { drizzelDb } from '.';
import { PostsTable } from './schemas';

(async () => {
  const posts = await drizzelDb.select().from(PostsTable);

  console.log(posts);
})();
