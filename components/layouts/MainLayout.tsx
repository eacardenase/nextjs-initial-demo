import Head from 'next/head';

import styles from '@/components/layouts/MainLayout.module.css';
import NavBar from '@/components/NavBar';

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Edwin</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
}
