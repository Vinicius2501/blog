import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header>Entre Commits e Café</Header>
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
          linkProps={{ href: '#' }}
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
          <PostHeading url='#' as='h1'>
            Primiero Post
          </PostHeading>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            suscipit est sed aliquam veritatis consectetur, exercitationem
            dignissimos adipisci. Nesciunt voluptate saepe doloremque eveniet
            beatae dicta. Voluptas natus hic amet quisquam.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer
        className={clsx('text-6xl', ' font-bold', ' text-center', 'py-8')}
      >
        Footer
      </footer>
    </Container>
  );
}
