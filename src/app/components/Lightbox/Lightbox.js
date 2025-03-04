'use client'
import React, { useState } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({imageSrc, altText, imageClassName}) {
  const [isOpen, setIsOpen] = useState(false);

  function openLightbox() {
    setIsOpen(true);
  }

  function closeLightbox() {
    setIsOpen(false);
  }

  return (
      <div>
        <img
          src={imageSrc}
          alt={altText}
          className={`${styles.thumbnail} ${imageClassName || ''}`}
          onClick={openLightbox}
        />

        {isOpen && (
          <div className={styles.overlay} onClick={closeLightbox}>
            <div className={styles.lightboxContent}>
              <img src={imageSrc} alt={altText} className={styles.fullImage} />
              <button className={styles.closeButton} onClick={closeLightbox}>X</button>
            </div>
          </div>
        )}
      </div>
  );
}