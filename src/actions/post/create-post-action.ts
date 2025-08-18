'use server';
import { makePublicEmptyPost, PublicPost } from '@/DTO/post/dto';
import { PostCreateSchema } from '@/lib/post/validations';
import { PostModel } from '@/models/post/post-models';
import { postRepository } from '@/repositories/post';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeslugbyTitle } from '@/utils/make-slug-by-title';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidV4 } from 'uuid';

type CreatePostActionProps = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionProps,
  formData: FormData,
): Promise<CreatePostActionProps> {
  //TODO: Verificar usuário logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos!'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());

  const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);
  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error);
    return {
      errors,
      formState: makePublicEmptyPost(formDataToObj),
    };
  }
  const validPostData = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPostData,
    id: uuidV4(),
    slug: makeslugbyTitle(validPostData.title),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    await postRepository.createPost(newPost);
  } catch (e: unknown) {
    if (e instanceof Error)
      return {
        formState: newPost,
        errors: [e.message],
      };

    return {
      formState: newPost,
      errors: ['Não foi possível criar o seu post.'],
    };
  }

  revalidateTag('posts');

  redirect(`/admin/post/${newPost.id}`);
}
