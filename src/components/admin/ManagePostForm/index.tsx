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

type ManagePostFormProps = {
  publicPostDTO?: PublicPost;
};

export function ManagePostForm({ publicPostDTO }: ManagePostFormProps) {
  const initialFormState = {
    formState: makePublicEmptyPost(publicPostDTO),
    errors: [],
  };

  const [state, setFormState, isPending] = useActionState(
    createPostAction,
    initialFormState,
  );
  const { formState } = state;

  const [markdownValue, setMarkdownValue] = useState(formState.content);

  useEffect(() => {}, [state]);

  return (
    <form action={setFormState}>
      <div className={clsx('flex', 'flex-col', 'gap-6')}>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID do post'
          type='text'
          defaultValue={formState.id}
          readOnly
        />
        <InputText
          labelText='Título'
          name='title'
          placeholder='Título do post'
          type='text'
          defaultValue={formState.title}
        />
        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug do post'
          type='text'
          defaultValue={formState.slug}
          readOnly
        />
        <InputText
          labelText='Resumo'
          name='excerpt'
          placeholder='Resumo do post'
          type='text'
          defaultValue={formState.excerpt}
        />

        <ImageUploader />

        <InputText
          labelText='URL da capa'
          name='coverImageUrl'
          placeholder='URL da imagem da capa'
          defaultValue={formState.coverImageUrl}
          type='text'
          readOnly
        />
        <MarkdownEditor
          labeltext='Contéudo'
          value={markdownValue}
          setValue={setMarkdownValue}
          textAreaName='content'
          disabled={false}
        />

        <InputCheckbox
          labelText='Publicado'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Autor do post'
          type='text'
          defaultValue={formState.author}
        />

        <Button variant='default' size='md'>
          <CircleCheckIcon />
          enviar
        </Button>
      </div>
    </form>
  );
}
