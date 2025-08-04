import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Entre Commits e Café',
  description:
    'Dicas, reflexões e aprendizados sobre desenvolvimento de software, produtividade e rotina dev — tudo entre um commit e outro gole de café.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className='dark'>
      <body>{children}</body>
    </html>
  );
}
