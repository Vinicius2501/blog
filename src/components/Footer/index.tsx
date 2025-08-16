import clsx from 'clsx';

type FooterProps = {
  children: React.ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <footer className={clsx('text-xs/tight', 'text-center', 'py-8')}>
      {children}
    </footer>
  );
}
