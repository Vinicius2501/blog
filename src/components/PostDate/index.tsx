import { formatDateTime, relativeDate } from '@/utils/format-datetime';
import clsx from 'clsx';

type PostDateProps = {
  createdAt: string;
};

export function PostDate({ createdAt }: PostDateProps) {
  return (
    <time
      className={clsx('text-slate-600', 'text-sm/tight')}
      dateTime={createdAt}
      title={formatDateTime(createdAt)}
    >
      {relativeDate(createdAt)}
    </time>
  );
}
