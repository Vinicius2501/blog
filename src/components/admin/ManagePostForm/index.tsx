'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import clsx from 'clsx';
import { CircleCheckIcon } from 'lucide-react';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { PublicPost } from '@/DTO/post/dto';

type ManagePostFormProps = {
  publicPostDTO?: PublicPost;
};

export function ManagePostForm({ publicPostDTO }: ManagePostFormProps) {
  const [markdownValue, setMarkdownValue] = useState(
    publicPostDTO ? publicPostDTO.content : 'Começe a *digitar*',
  );

  return (
    <form action=''>
      <div className={clsx('flex', 'flex-col', 'gap-6')}>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID do post'
          type='text'
          defaultValue={publicPostDTO?.id || ''}
          readOnly
        />
        <InputText
          labelText='Título'
          name='title'
          placeholder='Título do post'
          type='text'
          defaultValue={publicPostDTO?.title || ''}
        />
        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug do post'
          type='text'
          defaultValue={publicPostDTO?.slug || ''}
          readOnly
        />
        <InputText
          labelText='Resumo'
          name='excerpt'
          placeholder='Resumo do post'
          type='text'
          defaultValue={publicPostDTO?.excerpt || ''}
        />

        <ImageUploader />

        <InputText
          labelText='URL da capa'
          name='coverImageUrl'
          placeholder='URL da imagem da capa'
          defaultValue={publicPostDTO?.coverImageUrl || ''}
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
          defaultChecked={publicPostDTO?.published || false}
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Autor do post'
          type='text'
          defaultValue={publicPostDTO?.author || ''}
        />

        <Button variant='default' size='md'>
          <CircleCheckIcon />
          enviar
        </Button>
      </div>
    </form>
  );
}
