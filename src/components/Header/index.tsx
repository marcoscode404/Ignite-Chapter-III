/* eslint-disable prettier/prettier */
import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
            <h1> Colab<span> Devs </span> </h1>
        </a>
      </Link>
    </header>
  );
}
