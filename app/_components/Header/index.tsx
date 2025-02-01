import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.container}>
        <Link href="/" passHref>
          {/* TODO: ロゴ画像を差し替える */}
          <div className={styles.logo}>
            <Image src={'/horie-1.png'} alt="Logo"  width={1024} height={1024}  />
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <ul className={styles.navLinks}>
        <li className={styles.navLink}>
            <Link href="/#about">ABOUT</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#hairCatalog">NEWS</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#menu">MENU</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#staff">STAFF</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#access">ACCESS</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
