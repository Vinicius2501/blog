'use client';

import { Button } from '@/components/Button';
import { IMAGEUPLOADER_MAX_SIZE } from '@/lib/constants';
import clsx from 'clsx';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > IMAGEUPLOADER_MAX_SIZE) {
      const readbleMaxSize = IMAGEUPLOADER_MAX_SIZE / 1024;
      toast.error(
        `O tamnho maximo da imagem devem ser de ${readbleMaxSize}KB!`,
      );
      fileInput.value = '';
      return;
    }

    const formData = new FormData();

    //TODO: Criar action para upload da imagem
    formData.append('file', file);

    fileInput.value = '';

    toast.success('Imagem carregada com sucesso!');
  }

  return (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'py-4')}>
      <Button
        type='button'
        className='self-start'
        variant='default'
        size='md'
        onClick={handleChooseFile}
      >
        <ImageUpIcon />
        Enviar imagem do post
      </Button>

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className='hidden'
        name='file'
        type='file'
        accept='image/*'
      />
    </div>
  );
}
