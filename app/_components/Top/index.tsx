import React from 'react';
import styles from './Top.module.css';
import Image from 'next/image';

export default function Top() {
  return (
    <section id="top" className={styles.topContainer}>
      <div className={styles.textContainer}>
        <h1>
          <p>My</p>
          <p>Portfolio</p>
        </h1>
      </div>
      <div className={styles.imgContainer}>
          <Image src="/aa.jpeg" alt="トップ画像" width={1024} height={768}/>
          <div className="light-leak"></div>
      </div>
    </section>
  );
}
