import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id= "about" className={styles.aboutContainer}>
      <div className={styles.leftSection}>
        <Image src="/horie-1.png" alt="About Us" width={1024} height={1024}/>
        <div className={styles.description}>
          <p>
            <span>
              どうも初めまして、京都デザイン&テクノロジー専門学校・ホワイトハッカー専攻の堀江凌世です
              
            </span>
            <span>

            </span>
          </p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>
          <p>About</p>
          <p>Me</p>
        </h2>
      </div>
    </section>
  );
}
