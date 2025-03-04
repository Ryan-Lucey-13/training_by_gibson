'use client';
import React, { useState, useEffect,useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';
import SignUpButton from '../SignUpButton/SignUpButton.js'
  
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const pathname = usePathname();

  function toggleNavBar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleLinkClick() {
    setIsOpen(false);
  }
  function getLinkClass(path) {
    return pathname === path ? styles.active : '';
  }
  return (
      <nav className={styles.TBGNavBar}>
        <h1 className={`${styles.TBGLogo}`}>TRAINING BY GIBSON</h1>
          <div className={`${styles.TBGHamburger} ${isOpen ? styles.active : ''}`} onClick={toggleNavBar} ref={hamburgerRef}>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </div>
          <div className={`${styles.TBGLinks} ${isOpen ? styles.active : ''}`} ref={menuRef}>
            <Link href='/' className={getLinkClass('/')} onClick={handleLinkClick} passHref>
              <p >Home</p>
            </Link>
            <Link href='/about' className={getLinkClass('/about')} onClick={handleLinkClick}>
              <p >About</p>
            </Link>
            <Link href='/services' className={getLinkClass('/services')} onClick={handleLinkClick}>
              <p >Services</p>
            </Link>
              <Link href='/results' className={getLinkClass('/results')} onClick={handleLinkClick}>
            <p >Results</p>
              </Link>
            <Link href='/contact' className={getLinkClass('/contact')} onClick={handleLinkClick}>
              <p >Contact</p>
            </Link>
          </div>
          <SignUpButton />
      </nav>
  );
}