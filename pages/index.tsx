import Link from 'next/link';

import { MainLayout } from '@/components/layouts/MainLayout';

export const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className="description">
        Get started by editing <code className="code">pages/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default HomePage;
