import styles from '@/components/NavBar.module.css';
import { ActiveLink } from '@/components/ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((navItem, index) => (
        <ActiveLink key={index} text={navItem.text} href={navItem.href} />
      ))}
    </nav>
  );
};
