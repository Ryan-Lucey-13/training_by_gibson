'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignUpButton.module.css';

export default function SignUpButton() {
  const router = useRouter();

  function handleContactClick() {
    router.push('/contact')
  }
  return (
      <button className={styles.TBGSignupButton} onClick={handleContactClick}>Sign Up</button>
  );
}