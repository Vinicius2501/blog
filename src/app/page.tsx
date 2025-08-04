import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link
          href='#'
          className={clsx('h-full', 'w-full', 'overflow-hidden', 'rounded-2xl')}
        >
          <Image
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Títulio do post'
            className={clsx(
              'object-cover',
              'object-center',
              'group-hover:scale-105',
              'transition',
              'h-full',
              'w-full',
            )}
            priority
          />
        </Link>
        <div className={clsx('flex', 'flex-col', 'gap-4', 'sm:justify-center')}>
          <time
            className={clsx('text-slate-600', 'text-sm/tight', 'block')}
            dateTime='2025-08-03'
          >
            {' '}
            03/08/2025 22:53
          </time>

          <h1 className={clsx('text-2xl/tight', 'font-bold', 'sm:text-4xl')}>
            <Link href='#'> Título temporário</Link>
          </h1>
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
