import React, { useState } from 'react';
import styles from './news.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 'fit-content',
    maxHeight: '70%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '0',
    border: 'none',
  },
  overlay: {
    transition: 'opacity 400ms ease-in-out',
    backgroundColor: 'rgba(100, 100, 100, 0.75)',
  },
};

export default function HairCatalog({ }) {

  return (
    <section id="hairCatalog" className={styles.hairCatalogContainer}>
      <div className={styles.leftSection}>
        <h2>
          <p>News</p>
          <p>List</p>
        </h2>
      </div>
    </section>
  );
}
