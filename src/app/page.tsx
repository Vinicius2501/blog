import { PostFeatured } from '@/components/PostFeatured';

import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

import { Suspense } from 'react';

export const dynamic = 'force-static';

export default async function Home() {
  return (
    <Suspense fallback={<SpinLoader className={clsx('min-h-20', 'mb-16')} />}>
      <PostFeatured />

      <PostList />
    </Suspense>
  );
}
