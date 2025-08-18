'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import clsx from 'clsx';
import { CircleCheckIcon } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { makePublicEmptyPost, PublicPost } from '@/DTO/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';
import { toast } from 'react-toastify';
import { updatePostAction } from '@/actions/post/update-post-action';

type ManagePostFormUpdateProps = {
  mode: 'update';
  publicPostDTO?: PublicPost;
};

type ManagePostFormCreateProps = {
  mode: 'create';
};

type ManagePostFormProps =
  | ManagePostFormUpdateProps
  | ManagePostFormCreateProps;

export function ManagePostForm(props: ManagePostFormProps) {
  const { mode } = props;

  let publicPostDTO;

  if (mode === 'update') {
    publicPostDTO = props.publicPostDTO;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };

  const initialFormState = {
    formState: makePublicEmptyPost(publicPostDTO),
    errors: [],
  };

  const [state, setFormState, isPending] = useActionState(
    actionsMap[mode],
    initialFormState,
  );
  const { formState } = state;

  const [markdownValue, setMarkdownValue] = useState(formState.content);

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success && state.errors.length == 0) {
      toast.dismiss();
      toast.success('Post atualizado com sucesso!');
    }
  }, [state.success]);

  return (
    <form action={setFormState}>
      <div className={clsx('flex', 'flex-col', 'gap-6')}>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID do post'
          type='text'
          defaultValue={formState.id}
          disabled={isPending}
          readOnly
        />
        <InputText
          labelText='Título'
          name='title'
          placeholder='Título do post'
          type='text'
          defaultValue={formState.title}
          disabled={isPending}
        />
        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug do post'
          type='text'
          defaultValue={formState.slug}
          disabled={isPending}
          readOnly
        />
        <InputText
          labelText='Resumo'
          name='excerpt'
          placeholder='Resumo do post'
          type='text'
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <ImageUploader disabled={isPending} />

        <InputText
          labelText='URL da capa'
          name='coverImageUrl'
          placeholder='URL da imagem da capa'
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
          type='text'
        />
        <MarkdownEditor
          labeltext='Contéudo'
          value={markdownValue}
          setValue={setMarkdownValue}
          textAreaName='content'
          disabled={isPending}
        />

        <InputCheckbox
          labelText='Publicado'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Autor do post'
          type='text'
          defaultValue={formState.author}
          disabled={isPending}
        />

        <Button variant='default' size='md' disabled={isPending}>
          <CircleCheckIcon />
          Enviar
        </Button>
      </div>
    </form>
  );
}
