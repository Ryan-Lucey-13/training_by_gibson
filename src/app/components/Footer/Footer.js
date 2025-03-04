import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>
      <footer className={styles.TBGFooter}>
        <p className={styles.TBGCopyright}>©Gibson Ho Personal Training, 2025</p>
        <p className={styles.TBGSignature}>Site Built by Ryan Lucey</p>
      </footer>
    </div>
  );
}