'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useTransition } from 'react';

type DeletePostButtonProps = {
  post_id: string;
  post_title: string;
};

export function DeletePostButton({
  post_id,
  post_title,
}: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      const result = await deletePostAction(post_id);
      alert(result);
    });
  }

  return (
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
        'cursor-not-allowed',
      )}
      aria-label={`Apagar post: ${post_title}`}
      title={`Apagar post: ${post_title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
