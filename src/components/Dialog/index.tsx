'use client';
import clsx from 'clsx';

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      className={clsx(
        'fixed',
        'z-50',
        'inset-0',
        'bg-black/50',
        'backdrop-blur-xs',
        'flex',
        'items-center',
        'justify-center',
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          'text-slate-600',
          'bg-slate-100',
          'p-6',
          'rounded-lg',
          'max-w-2xl',
          'mx-6',
          'flex',
          'flex-col',
          'gap-6',
          'text-center',
          'shadow-lg',
          'shadow-white/30',
        )}
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <h3 id='dialog-title' className={clsx('text-xl', 'font-extrabold')}>
          {title}
        </h3>
        <div id='dialog-description'>{content}</div>
        <div className={clsx('flex', 'items-center', 'justify-around')}>
          <button
            className={clsx(
              'bg-blue-400',
              'text-slate-50',
              'flex',
              'items-center',
              'justify-center',
              'py-2',
              'px-2',
              'rounded-lg',
              'cursor-pointer',
              'hover:bg-blue-600',
              'transition',
              'disabled:bg-slate-200',
              'disabled:text-slate-400',
              'disabled:cursor-not-allowed',
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Confirmar
          </button>
          <button
            className={clsx(
              'bg-slate-300',
              'text-slate-950',
              'flex',
              'items-center',
              'justify-center',
              'py-2',
              'px-4',
              'rounded-lg',
              'cursor-pointer',
              'hover:bg-slate-400',
              'transition',
              'disabled:bg-slate-200',
              'disabled:text-slate-400',
              'disabled:cursor-not-allowed',
            )}
            onClick={handleCancel}
            disabled={disabled}
            autoFocus
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
