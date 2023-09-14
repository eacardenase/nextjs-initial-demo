import styles from '@/components/NavBar.module.css';
import { ActiveLink } from '@/components/ActiveLink';

export default function NavBar() {
  return (
    <nav className={styles['menu-container']}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
}
