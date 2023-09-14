import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';
import NavBar from '@/components/NavBar';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Edwin</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1>Home Page</h1>
        <h1>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}
