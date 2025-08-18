import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function InputText({ labelText = '', ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className={clsx('flex', 'flex-col', 'gap-1')}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        {...props}
        className={clsx(
          'bg-white',
          'text-slate-600',
          'text-base/tight',
          'outline-0',
          'ring-2',
          'ring-slate-500',
          'rounded',
          'py-2',
          'px-2',
          'transition',
          'focus:ring-blue-500',
          'disabled:bg-slate-200',
          'disabled:text-slate-400',
          'disabled:placeholder-slate-400',
          'read-only:bg-slate-200',
          'disabled:cursor-not-allowed',
          props.className,
        )}
        id={id}
      />
    </div>
  );
}
