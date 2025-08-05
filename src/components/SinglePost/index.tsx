import { findPostBySlugCached } from '@/lib/post/queries';
import clsx from 'clsx';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return <p className={clsx()}>{post.content}</p>;
}
