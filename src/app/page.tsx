import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div>
      <header className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
        Header
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer
        className={clsx('text-6xl', ' font-bold', ' text-center', 'py-8')}
      >
        Footer
      </footer>
    </div>
  );
}
