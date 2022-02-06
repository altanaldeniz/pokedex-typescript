import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-300">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b-2 border-black py-5 text-center text-4xl">
        <Link href={`/`}>
          <span className="cursor-pointer border-2 border-black p-4">
            Pokedex
          </span>
        </Link>
      </header>
      <main className="container mx-auto  max-w-xl flex-grow pt-2">
        {children}
      </main>
      <footer className="flex h-10 w-full items-center justify-center space-x-2 border-t-2 border-black">
        <a
          className="hover:underline"
          href="https://github.com/altanaldeniz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <span>Altan Aldeniz</span>
      </footer>
    </div>
  );
}
