'use server';

import { drizzelDb } from '@/db/drizzle';
import { PostsTable } from '@/db/drizzle/schemas';
import { postRepository } from '@/repositories/post';
import { logColor } from '@/utils/log-color';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  //TODO: Chegar login
  logColor('' + id);

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos!',
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: 'Post não existe na base de dados',
    };
  }

  //TODO: mover metodo para repository

  await drizzelDb.delete(PostsTable).where(eq(PostsTable.id, id));

  //TODO: revalidateTag ou revalidatePath

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
