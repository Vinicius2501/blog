'use client';

import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  const navClasses = clsx(
    'bg-slate-100',
    'text-slate-900',
    'rounded-lg',
    'flex',
    'flex-col',
    'mb-8',
    !isOpen && 'overflow-hidden',
    !isOpen && 'h-10',
    'sm:flex-row',
    'sm:flex-wrap',
    'sm:overflow-visible',
    'sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-[16px]',
    '[&>svg]:h-[16px]',
    'px-4',
    'flex',
    'transition',
    'hover:bg-slate-200',
    'items-center',
    'justify-start',
    'gap-2',
    'h-10',
    'shrink-0',
    'cursor-pointer',
  );

  const openCloseBttnClasses = clsx(linkClasses, 'italic', 'sm:hidden');

  return (
    <nav className={navClasses}>
      <button onClick={handleClickMenu} className={openCloseBttnClasses}>
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Fehcar
          </>
        )}
      </button>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon />
        Posts
      </Link>{' '}
      <Link className={linkClasses} href='/admin/post/new'>
        <PlusIcon />
        Criar post
      </Link>{' '}
    </nav>
  );
}
