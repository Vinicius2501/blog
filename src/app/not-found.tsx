import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-[320px]',
        'flex',
        'bg-slate-200',
        'text-slate-800',
        'mb-16',
        'rounded-xl',
        'items-center',
        'justify-center',
        'text-center',
      )}
    >
      <div className={clsx('px-8')}>
        <h1 className={clsx('text-3xl/tight', 'pb-8', 'sm:text-5xl/tight')}>
          404 - Not found
        </h1>
        <p>Parece que você digitou algo que nem o Git reconheceria.</p>
        <p>Que tal voltar pro último commit estável? </p>
      </div>
    </div>
  );
}
