"use client";
import React from 'react';

import styles from './Banner.module.css';


export default function Banner() {
  
  const handleScroll = () => {
    const bannerDescriptionElement = document.getElementById('banner-description');
    if (bannerDescriptionElement) {
      bannerDescriptionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>Çınar</h1>
        <h2 className={styles.subtitle}>Dunnage Bag</h2>
        <p className={styles.description}>
          Lojistik sektöründe güvenilir ve dayanıklı çözümler sunar.
        </p>
        <p className={styles.slogan}>
          Yükleriniz her zaman güvende!
        </p>
        <button className="ctaButton" onClick={handleScroll}>
          Keşfet <span className={styles.arrow}>&rarr;</span>
        </button>
      </div>
      <div className={styles.bannerImageContainer}>
        <img
          src="/icons/banner1.svg"
          className={styles.bannerImage}
          alt="Banner"
        />
      </div>
    </div>
  );
}
