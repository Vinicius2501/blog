import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: clsx('text-2xl/tight', 'font-bold', 'sm:text-4xl'),
    h2: clsx('text-xl/tight', 'sm:text-4xl'),
  };

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link href={url}> {children}</Link>
    </Tag>
  );
}
