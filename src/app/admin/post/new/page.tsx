import { Button } from '@/components/Button';
import clsx from 'clsx';
import { BugIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <div
        className={clsx('py-16', 'flex', 'flex-wrap', 'gap-4', 'items-center')}
      >
        <Button variant='default' size='sm'>
          <BugIcon /> Confirmar
        </Button>
        <Button variant='ghost' size='md'>
          <BugIcon />
          Cancelar
        </Button>
        <Button variant='danger' size='lg'>
          <BugIcon />
          Apagar
        </Button>
      </div>
      <div
        className={clsx('py-16', 'flex', 'flex-wrap', 'gap-4', 'items-center')}
      >
        <Button variant='default' size='sm' disabled>
          <BugIcon /> Confirmar
        </Button>
        <Button variant='ghost' size='md' disabled>
          <BugIcon />
          Cancelar
        </Button>
        <Button variant='danger' size='lg' disabled>
          <BugIcon />
          Apagar
        </Button>
      </div>
    </>
  );
}
