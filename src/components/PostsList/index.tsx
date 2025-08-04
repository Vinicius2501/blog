import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

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
        return (
          <div
            key={post.id}
            className={clsx('flex', 'flex-col', 'group', 'gap-4')}
          >
            <PostCoverImage
              linkProps={{ href: `/post/${post.slug}` }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 580,
                alt: post.title,
              }}
            />
            <div
              className={clsx('flex', 'flex-col', 'gap-4', 'sm:justify-center')}
            >
              <time
                className={clsx('text-slate-600', 'text-sm/tight', 'block')}
                dateTime={post.createdAt}
              >
                {' '}
                03/08/2025 22:53
              </time>
              <PostHeading url='#' as='h1'>
                {post.title}
              </PostHeading>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                suscipit est sed aliquam veritatis consectetur, exercitationem
                dignissimos adipisci. Nesciunt voluptate saepe doloremque
                eveniet beatae dicta. Voluptas natus hic amet quisquam.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
