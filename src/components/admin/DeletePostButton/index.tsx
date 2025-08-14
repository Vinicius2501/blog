'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import { Dialog } from '@/components/Dialog';
import { postRepository } from '@/repositories/post';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useState, useTransition } from 'react';

type DeletePostButtonProps = {
  post_id: string;
  post_title: string;
};

export function DeletePostButton({
  post_id,
  post_title,
}: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(post_id);
      setShowDialog(false);

      if (result.error) alert('Error: ' + result.error);
    });
  }

  return (
    <>
      <button
        className={clsx(
          'text-red-400',
          'cursor-pointer',
          'transition',
          '[&_svg]:w-4',
          '[&_svg]:h-4',
          'hover:scale-120',
          'hover:text-red-600',
          'disabled:text-slate-600',
          'disabled:cursor-not-allowed',
        )}
        aria-label={`Apagar post: ${post_title}`}
        title={`Apagar post: ${post_title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title='Confirma a exclusão?'
          content={`O post "${post_title}" vai embora junto com o aroma do café. Tem certeza que quer excluir e não há mais nada a ajustar?`}
          onConfirm={handleConfirm}
          onCancel={() => setShowDialog(false)}
          disabled={isPending}
        />
      )}
    </>
  );
}
