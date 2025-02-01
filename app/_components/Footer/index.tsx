import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
       <div className={styles.socialIcons}>
          {/* TODO: ソーシャルリンクを差し替える */}
          <a href="https://www.instagram.com/ryosei.ryo/" target="_blank" rel="noopener noreferrer">
            <img src={'/instagram.svg'} alt="Instagram" />
          </a>
        </div>
      <div className={styles.copyRight}>24a31e0013 © 2025 Horie Ryosei</div>
    </section>
  );
}
