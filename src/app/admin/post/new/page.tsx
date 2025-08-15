import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { BugIcon, CheckIcon, CircleCheckIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <form action=''>
      <div className={clsx('flex', 'flex-col', 'gap-6')}>
        <InputText labelText='Seu nome' placeholder={'Digite seu nome:'} />
        <InputText labelText='Seu email' placeholder={'Digite seu Email:'} />
        <InputText
          labelText='Seu email'
          placeholder={'Digite seu Email:'}
          disabled
        />

        <InputCheckbox labelText='Checkbox Text' />
      </div>

      <div
        className={clsx('py-16', 'flex', 'flex-wrap', 'gap-4', 'items-center')}
      >
        <Button variant='default' size='md'>
          <CircleCheckIcon />
          enviar
        </Button>
      </div>
    </form>
  );
}
