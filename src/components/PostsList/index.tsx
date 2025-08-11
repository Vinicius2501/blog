import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostSumary } from '../PostSumary';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export async function PostList() {
  const posts = await findAllPublicPostsCached();
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'gap-8',
        'mb-16',
        'sm:grid-cols-2',
        'sm:grid-cols-3',
      )}
    >
      {posts.slice(1).map(post => {
        const postUrl = `/post/${post.slug}`;
        return (
          <div
            key={post.id}
            className={clsx('flex', 'flex-col', 'group', 'gap-4')}
          >
            <PostCoverImage
              linkProps={{ href: postUrl }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 580,
                alt: post.title,
              }}
            />

            <PostSumary
              postUrl={postUrl}
              postHeading='h2'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            ></PostSumary>
          </div>
        );
      })}
    </div>
  );
}
