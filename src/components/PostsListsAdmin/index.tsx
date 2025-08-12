import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Link from 'next/link';

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

              <button
                className={clsx(
                  'text-red-400',
                  'cursor-pointer',
                  'transition',
                  '[&_svg]:w-4',
                  '[&_svg]:h-4',
                  'hover:scale-120',
                  'hover:text-red-600',
                )}
                aria-label={`Apagar post: ${post.title}`}
                title={`Apagar post: ${post.title}`}
              >
                <Trash2Icon />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
