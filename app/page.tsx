import styles from './page.module.css';
import Image from 'next/image';

import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';
import Top from './_components/Top';
import About from './_components/About';
import  News from './_components/News';
import ReserveButton from './_components/ReserveButton';

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <Top />
      <About />
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}></h1>
          <p className={styles.description}>
            
          </p>
        </div>
      </section>
      <News /> 
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <ReserveButton />
    </>
  );
}
