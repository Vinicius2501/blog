import { deletePostAction } from '@/actions/post/delete-post-action';
import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostButton } from '../admin/DeletePostButton';

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
              )}
              key={post.id}
            >
              <Link href={`post/${post.id}`}>{post.title}</Link>

              {!post.published && (
                <span className={clsx('text-xs', 'slate-600', 'italic')}>
                  (Não publicado)
                </span>
              )}

              <form action=''>
                <input
                  type='hidden'
                  name='id'
                  id={post.id}
                  defaultValue={post.id}
                />
                <DeletePostButton post_id={post.id} post_title={post.title} />
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
}
