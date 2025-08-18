'use server';
import { postRepository } from '@/repositories/post';

import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  //TODO: Chegar login

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos!',
    };
  }
  let post;
  try {
    post = await postRepository.deletePost(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: 'Não foi possível apagar o post.',
    };
  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
