import { ErrorMessage } from '@/components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle='404 - Página não encontrada'
      contentTitle='404 - Not found'
      content={
        <div>
          Parece que você digitou algo que nem o Git reconheceria.<br></br>
          Que tal voltar pro útlimo commit estável?
        </div>
      }
    />
  );
}
