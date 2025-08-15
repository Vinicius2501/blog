import clsx from 'clsx';
import { useId } from 'react';

type InputCheckboxProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

export function InputCheckbox({
  labelText = '',
  type = 'checkbox',
  ...props
}: InputCheckboxProps) {
  const id = useId();
  return (
    <div className={clsx('flex', 'items-center', 'gap-2')}>
      <input
        type={type}
        id={id}
        className={clsx(
          'w-4',
          'h-4',
          'outline-none',
          'focus:ring-1',
          'focus:ring-blue-500',
          props.className,
        )}
      />
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}
