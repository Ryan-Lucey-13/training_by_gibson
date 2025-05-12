import React from 'react';
import styles from './TwoPanelFooter.module.css';
import SignUpButton from '../SignUpButton/SignUpButton.js'

export default function TwoPanelFooter() {
  return (
    <div className={styles.TBGTwoPanelFooter}>
      <div className={styles.TBGSignUpPanel}>
        <h2>Ready to Start?</h2>
        <p> Are you ready to feel better about your body and improve your daily confidence? Get in Touch!</p>
        <div className={styles.TBGSignUpButton}>
          <SignUpButton />
        </div>
      </div>
      <div className={styles.TBGSocialsPanel}>
        <h2>Stay Updated</h2>
        <p>Follow Gibson on social media and get tips and tricks on how to improve your well-being!</p>
        <a href="https://www.instagram.com/gibblesnyc/" target="_blank" rel="noopener noreferrer" className={styles.TBGSocialsLinks}>
          <img className={styles.TBGSocialsIcon} src="/images/instagram.png" alt="instagram link"/>
        </a>
        <a href="https://www.tiktok.com/@gibblesnyc" target="_blank" rel="noopener noreferrer" className={styles.TBGSocialsLinks}>
          <img className={styles.TBGSocialsIcon} src="/images/tiktok.png" alt="tiktok link"/>
        </a>
      </div>
    </div>
  );
}