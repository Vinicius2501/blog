import { findPostBySlugCached } from '@/lib/post/queries';
import clsx from 'clsx';

type PostSlugProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostSlugProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return <h1 className={clsx()}>{post.title}</h1>;
}
