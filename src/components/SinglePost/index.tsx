import { findPostBySlugCached } from '@/lib/post/queries/public';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';
import clsx from 'clsx';
import { SafeMarkdown } from '../SafeMarkdown';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className={clsx('mb-8')}>
      <header className={clsx('group', 'flex', 'flex-col', 'gap-4', 'mb-4')}>
        <Image
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
          className={clsx('rounded-2xl')}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate createdAt={post.createdAt} />
        </p>
      </header>
      <p className={clsx('text-xl', 'mb-8')}>{post.excerpt}</p>
      <SafeMarkdown markdown={post.content}></SafeMarkdown>
    </article>
  );
}
