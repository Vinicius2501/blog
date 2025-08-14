import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { BugIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <div className={clsx('flex', 'flex-col', 'gap-6')}>
        <InputText labelText='Seu nome' placeholder={'Digite seu nome:'} />
        <InputText labelText='Seu email' placeholder={'Digite seu Email:'} />
        <InputText
          labelText='Somente leitura'
          placeholder={'Somente leitura'}
          readOnly
          defaultValue={'Somente leitura'}
        />
        <InputText
          labelText='Seu email'
          placeholder={'Digite seu Email:'}
          disabled
          defaultValue={'Desabilitado'}
        />
        <InputText
          labelText='Seu email'
          placeholder={'Digite seu Email:'}
          disabled
        />
      </div>

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
