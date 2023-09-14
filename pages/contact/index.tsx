import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';
import NavBar from '@/components/NavBar';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Edwin</title>
        <meta name="description" content="Contact Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1>Contact Page</h1>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing{' '}
            <code className={styles.code}>pages/contact.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}
