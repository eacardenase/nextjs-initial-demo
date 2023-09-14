import Link from 'next/link';

import MainLayout from '@/components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="title">Contact Page</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing <code className="code">pages/contact.tsx</code>
      </p>
    </MainLayout>
  );
}
