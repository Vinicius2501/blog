'use server';

import { makePublicEmptyPost, PublicPost } from '@/DTO/post/dto';
import { PostCreateSchema } from '@/lib/post/validations';
import { PostModel } from '@/models/post/post-models';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeslugbyTitle } from '@/utils/make-slug-by-title';
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

  return {
    formState: newPost,
    errors: [],
  };
}
