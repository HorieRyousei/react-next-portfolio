import React from 'react';
import styles from './ReserveButton.module.css';
import { BiSolidEnvelope } from "react-icons/bi";

export default function ReserveButton() {
  return (
    // TODO: 予約ボタンのリンク先を変更する
    <a className={styles.reserveButton} href="/contact" target="_blank" rel="noopener noreferrer">
      <div className={styles.reserveIcon}>
      <BiSolidEnvelope/>
      </div>
    </a>
  );
}

