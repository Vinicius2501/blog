import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';

export async function PostsListsAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <>
      <div className={clsx('py-16')}>
        {posts.map(post => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    </>
  );
}
