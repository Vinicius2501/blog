import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostButton } from '../DeletePostButton';

export async function PostsListsAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <>
      <div className={clsx('mb-16')}>
        {posts.map(post => {
          return (
            <div
              className={clsx(
                'flex',
                'gap-8',
                'items-center',
                'justify-between',
                'py-2',
                'px-2',
                !post.published ? 'bg-slate-600' : '',
              )}
              key={post.id}
            >
              <Link href={`post/${post.id}`}>{post.title}</Link>

              {!post.published && (
                <span className={clsx('text-xs', 'italic')}>
                  (Não publicado)
                </span>
              )}

              <DeletePostButton post_id={post.id} post_title={post.title} />
            </div>
          );
        })}
      </div>
    </>
  );
}
