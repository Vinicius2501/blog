'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-actions';
import { Button } from '@/components/Button';
import { IMAGEUPLOADER_MAX_SIZE } from '@/lib/constants';
import clsx from 'clsx';
import { FileInput, ImageUpIcon } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState('');

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();
    if (!fileInputRef.current) {
      setImageUrl('');
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImageUrl('');
      return;
    }

    if (file.size > IMAGEUPLOADER_MAX_SIZE) {
      const readbleMaxSize = IMAGEUPLOADER_MAX_SIZE / 1024;
      toast.error(
        `O tamnho maximo da imagem devem ser de ${readbleMaxSize}KB!`,
      );
      fileInput.value = '';
      {
        setImageUrl('');
        return;
      }
    }

    const formData = new FormData();

    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        setImageUrl('');
        return;
      }

      setImageUrl(result.url);
    });

    fileInput.value = '';

    toast.success('Imagem carregada com sucesso!');
  }

  return (
    <div className={clsx('flex', 'flex-col', 'gap-4', 'py-4')}>
      <Button
        type='button'
        className='self-start'
        variant='default'
        size='md'
        onClick={handleChooseFile}
        disabled={isUploading}
      >
        <ImageUpIcon />
        Enviar imagem do post
      </Button>

      {!!imageUrl && (
        <div className={clsx('flex', 'flex-col', 'justify-around', 'gap-4')}>
          <p>URL:{imageUrl} </p>
          <img src={imageUrl} className='rounded-lg' />
        </div>
      )}

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
