import clsx from 'clsx';
import { PostHeading } from '../PostHeading';
import { PostCoverImage } from '../PostCoverImage';
import { findeAllPublicPosts } from '@/lib/post/queries';

export async function PostFeatured() {
  const posts = await findeAllPublicPosts();
  const mainPost = posts[0];

  const postUrl = `/post/${mainPost.slug}`;
  return (
    <section
      className={clsx(
        'group',
        'grid',
        'grid-cols-1',
        'gap-8',
        'mb-16',
        'sm:grid-cols-2',
      )}
    >
      <PostCoverImage
        linkProps={{ href: postUrl }}
        imageProps={{
          src: mainPost.coverImageUrl,
          width: 1200,
          height: 720,
          alt: mainPost.title,
          priority: true,
        }}
      />

      <div className={clsx('flex', 'flex-col', 'gap-4', 'sm:justify-center')}>
        <time
          className={clsx('text-slate-600', 'text-sm/tight', 'block')}
          dateTime='2025-08-03'
        >
          {' '}
          03/08/2025 22:53
        </time>
        <PostHeading url={postUrl} as='h1'>
          {mainPost.title}
        </PostHeading>

        <p>{mainPost.excerpt}</p>
      </div>
    </section>
  );
}
