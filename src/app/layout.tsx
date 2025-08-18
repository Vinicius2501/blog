import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ToastifyContainer } from '@/components/ToastifyContainer';

export const metadata: Metadata = {
  title: {
    default: 'Entre Commits e Café',
    template: '%s | Entre Commits e Café',
  },
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
      <body>
        <ToastifyContainer />
        <Container>
          <Header>Entre Commits e Café</Header>

          {children}

          <Footer>
            <span>Copyright &copy; {new Date().getFullYear()} - </span>
            <Link href='/'>Entre Commits e Café</Link>
          </Footer>
        </Container>
      </body>
    </html>
  );
}
