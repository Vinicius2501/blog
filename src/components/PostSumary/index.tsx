import clsx from 'clsx';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

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
      <PostDate createdAt={createdAt} />
      <PostHeading url={postUrl} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
