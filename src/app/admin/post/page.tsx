import { PostsListsAdmin } from '@/components/PostsListsAdmin';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className={clsx('min-h-20', 'mb-16')} />}>
      <PostsListsAdmin></PostsListsAdmin>
    </Suspense>
  );
}
