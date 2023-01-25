import styles from './Header.module.css';
import Icon from '../image/Icon.js';
import Down from '../image/Down.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Works',
    path: '/Work',
  },
  {
    name: 'About-me',
    path: '/About-me',
  },
  {
    name: 'Contact',
    path: '/Contact',
  },
];

function Header() {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <section className={styles.logo}>
        <Icon />
        <h3 className="heading-4">Elias</h3>
      </section>
      <ul className={styles.list}>
        {HeaderList.map((list) => (
          <li className={router.asPath === list.path && styles.listActive}>
            <Link href={list.path}>{list.name}</Link>
          </li>
        ))}
        <li>EN</li>
      </ul>
    </section>
  );
}

export default Header;
