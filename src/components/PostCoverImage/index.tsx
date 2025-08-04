import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
};

export function PostCoverImage({ linkProps, imageProps }: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'h-full',
        'w-full',
        'overflow-hidden',
        'rounded-2xl',
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={clsx(
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          'h-full',
          'w-full',
          imageProps.className,
        )}
      />
    </Link>
  );
}
