import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import { PostFeatured } from '@/components/PostFeatured';

import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header>Entre Commits e Café</Header>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured></PostFeatured>

        <PostList />

        <footer
          className={clsx('text-6xl', ' font-bold', ' text-center', 'py-8')}
        >
          Footer
        </footer>
      </Suspense>
    </Container>
  );
}
