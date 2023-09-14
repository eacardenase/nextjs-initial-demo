import { useRouter } from 'next/router';

import Link from 'next/link';

interface IActiveLink {
  text: string;
  href: string;
}

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export function ActiveLink({ text, href }: IActiveLink) {
  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
}
