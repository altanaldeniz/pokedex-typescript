import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: Props) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto min-h-screen max-w-xl pt-8">
        {children}
      </main>
    </div>
  );
}
