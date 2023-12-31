import Link from 'next/link';

import type { NextPageWithLayout } from './_app';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';

export const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing <code className="code">pages/about.tsx</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
