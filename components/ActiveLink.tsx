import { CSSProperties } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Props } from './layouts/DarkLayout';

interface IActiveLink extends Props {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink = ({ text, href }: IActiveLink) => {
  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
