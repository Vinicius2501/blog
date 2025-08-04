import { Container } from '@/components/Container';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <header className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
        Header
      </header>
      <p className={clsx('text-justify')}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        distinctio rem voluptatibus vel nihil repudiandae laudantium in
        doloribus praesentium eveniet fugit aliquid est laboriosam quos sapiente
        consequuntur minus dignissimos magnam!
      </p>
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
