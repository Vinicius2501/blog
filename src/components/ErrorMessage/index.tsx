'user client';
import clsx from 'clsx';

type ErroMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErroMessageProps) {
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
      <title>{pageTitle}</title>
      <div className={clsx('px-8')}>
        <h1 className={clsx('text-3xl/tight', 'pb-8', 'sm:text-5xl/tight')}>
          {contentTitle}
        </h1>
        {content}
      </div>
    </div>
  );
}
