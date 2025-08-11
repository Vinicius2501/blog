import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
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
