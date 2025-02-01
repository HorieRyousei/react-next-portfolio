import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id= "about" className={styles.aboutContainer}>
      <div className={styles.leftSection}>
        <Image src="/horie-1.png" alt="About Us" width={75} height={100}/>
        <div className={styles.description}>
          <p>
            <span>
              Simple
              HairSalonは、鮮やかでモダンな内装が特徴のおしゃれな美容室です。店内には、高品質な美容用品や機器が整然と並び、スタイリストたちは最新のトレンドに基づいたスタイリングやカラーリングを提供しています。
            </span>
            <span>
              このサロンは、お客様に完璧なヘアスタイルを提供するために、トレンドや最新技術に常に敏感で、常に自己啓発をしています。また、スタイリストは豊富な経験を持ち、お客様の髪の質や骨格に合わせた最適なスタイルを提供するため、カウンセリングにも力を入れています。
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
