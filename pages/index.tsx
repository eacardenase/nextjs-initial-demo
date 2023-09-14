import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Edwin</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          Ir a <a href="/about">About</a>
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
