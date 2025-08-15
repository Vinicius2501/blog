'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import clsx from 'clsx';
import { CircleCheckIcon } from 'lucide-react';
import { useState } from 'react';

export function ManagePostForm() {
  const [markdownValue, setMarkdownValue] = useState('Começe a *digitar*');

  return (
    <form action=''>
      <div className={clsx('flex', 'flex-col', 'gap-6')}>
        <InputText labelText='Seu nome' placeholder={'Digite seu nome:'} />
        <InputText labelText='Seu email' placeholder={'Digite seu Email:'} />
        <InputText
          labelText='Seu email'
          placeholder={'Digite seu Email:'}
          disabled
        />

        <InputCheckbox labelText='Checkbox Text' />
        <MarkdownEditor
          labeltext='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={markdownValue}
          setValue={setMarkdownValue}
        ></MarkdownEditor>
      </div>

      <div
        className={clsx('py-16', 'flex', 'flex-wrap', 'gap-4', 'items-center')}
      >
        <Button variant='default' size='md'>
          <CircleCheckIcon />
          enviar
        </Button>
      </div>
    </form>
  );
}
