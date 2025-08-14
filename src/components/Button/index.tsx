import clsx from 'clsx';

type ButtonVariantes = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariantes;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'default',
  size = 'sm',
  children,
  ...props
}: ButtonProps) {
  const buttonVariantes: Record<ButtonVariantes, string> = {
    default: clsx('bg-blue-400', 'text-slate-50', 'hover:bg-blue-500'),
    ghost: clsx('bg-slate-300', 'text-slate-950', 'hover:bg-slate-400'),
    danger: clsx('bg-red-500', 'text-red-50', 'hover:bg-red-600'),
  };
  const buttonSize: Record<ButtonSizes, string> = {
    sm: clsx(
      'text-xs/tight',
      'py-1',
      'px-2',
      'rounded-sm',
      '[&>svg]:w-3',
      '[&>svg]:h-3',
      'gap-1',
    ),
    md: clsx(
      'text-base/tight',
      'py-2',
      'px-4',
      'rounded-md',
      '[&>svg]:w-4',
      '[&>svg]:h-4',
      'gap-2',
    ),
    lg: clsx(
      'text-lg/tight',
      'py-4',
      'px-6',
      'rounded-lg',
      '[&>svg]:w-5',
      '[&>svg]:h-5',
      'gap-3',
    ),
  };

  const buttonClasses = clsx(
    buttonVariantes[variant],
    buttonSize[size],
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'transition',
    'disabled:bg-slate-200',
    'disabled:text-slate-600',
    'disabled:cursor-not-allowed',
    props.className,
  );

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
