import clsx from 'clsx';

type SpinLoardProps = {
  className?: string;
};

export function SpinLoader({ className = '' }: SpinLoardProps) {
  return (
    <div className={clsx('flex', 'items-center', 'justify-center', className)}>
      <div
        className={clsx(
          'w-10',
          'h-10',
          'border-4',
          'border-t-transparent',
          'border-t-slate-900',
          'rounded-full',
          'animate-spin',
        )}
      ></div>
    </div>
  );
}
