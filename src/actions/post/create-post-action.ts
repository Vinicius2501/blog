'use server';

import { PublicPost } from '@/DTO/post/dto';

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

  return {
    formState: prevState.formState,
    errors: [],
  };
}
