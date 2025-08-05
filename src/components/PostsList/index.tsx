import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostSumary } from '../PostSumary';

export async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'gap-8',
        'sm:grid-cols-2',
        'sm:grid-cols-3',
      )}
    >
      {posts.map(post => {
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
