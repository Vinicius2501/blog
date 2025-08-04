import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        'min-h-screen',
        'text-slate-900',
        'bg-slate-100',
        'dark:text-slate-100',
        'dark:bg-slate-900',
      )}
    >
      <div className={clsx('max-w-screen-lg', 'mx-auto', 'px-8')}>
        {children}
      </div>
    </div>
  );
}
