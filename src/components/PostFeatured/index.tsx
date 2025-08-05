import clsx from 'clsx';
import { PostHeading } from '../PostHeading';
import { PostCoverImage } from '../PostCoverImage';

export function PostFeatured() {
  const postUrl = `/post/asdasdasd`;
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
          src: '/images/bryen_0.png',
          width: 1200,
          height: 720,
          alt: 'Títulio do post',
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
          Primeiro Post
        </PostHeading>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          suscipit est sed aliquam veritatis consectetur, exercitationem
          dignissimos adipisci. Nesciunt voluptate saepe doloremque eveniet
          beatae dicta. Voluptas natus hic amet quisquam.
        </p>
      </div>
    </section>
  );
}
