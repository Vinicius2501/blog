import { formatDateTime, relativeDate } from '@/utils/format-datetime';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

type PostSumaryProps = {
  postHeading: 'h1' | 'h2';
  postUrl: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSumary({
  postHeading,
  postUrl,
  createdAt,
  title,
  excerpt,
}: PostSumaryProps) {
  return (
    <div className={clsx('flex', 'flex-col', 'gap-4', 'sm:justify-center')}>
      <time
        className={clsx('text-slate-600', 'text-sm/tight', 'block')}
        dateTime={createdAt}
        title={formatDateTime(createdAt)}
      >
        {' '}
        {relativeDate(createdAt)}
      </time>
      <PostHeading url={postUrl} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
