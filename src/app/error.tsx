'use client';

import { ErrorMessage } from '@/components/ErrorMessage';
import clsx from 'clsx';
import Error from 'next/error';
import Link from 'next/link';
import { useEffect } from 'react';

type ErrorPagesProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPages({ error, reset }: ErrorPagesProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Algo saiu do script…'
      contentTitle='Erro inesperado — e não foi culpa do café'
      content={
        <div
          className={clsx(
            'text-left',
            'space-y-5', // contraste ok no dark
          )}
        >
          <p className='text-base leading-relaxed'>
            Parece que o sistema tropeçou em algum bug que não estava no
            roteiro.
          </p>

          <p className='text-base'>
            Enquanto a gente prepara mais uma xícara e resolve isso, você pode:
          </p>

          <ul className='list-disc pl-5 space-y-1 marker:text-slate-500'>
            <li>
              <Link
                href='/'
                className='underline underline-offset-4 hover:no-underline transition'
              >
                Voltar para a página inicial
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='underline underline-offset-4 hover:no-underline transition'
                onClick={() => reset}
              >
                Tentar novamente
              </Link>
            </li>
          </ul>

          <p className='text-sm text-slate-400'>
            Isso ajuda a gente a caçar o bug mais rápido que um{' '}
            <span className='font-mono'>git revert</span> numa sexta-feira à
            noite.
          </p>
        </div>
      }
    />
  );
}
