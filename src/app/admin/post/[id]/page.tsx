import { ManagePostForm } from '@/components/admin/ManagePostForm';
import { makePublicPostFromDb } from '@/DTO/post/dto';
import { findAllPostsAdmin, findPostByIdAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Editar post',
};

type AdminPostPageByIdProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostPageById({
  params,
}: AdminPostPageByIdProps) {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch();

  if (!post) notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-extrabold'>Editar post</h1>
      <ManagePostForm publicPostDTO={publicPost} />
    </div>
  );
}
