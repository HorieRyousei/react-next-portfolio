import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
       <div className={styles.socialIcons}>
          {/* TODO: ソーシャルリンクを差し替える */}
          <a href="https://www.instagram.com/ryosei.ryo/" target="_blank" rel="noopener noreferrer">
            <Image src={'/instagram.svg'} alt="Instagram" width={80} height={80}  />
          </a>
        </div>
      <div className={styles.copyRight}>24a31e0013 © 2025 Horie Ryosei</div>
    </section>
  );
}
