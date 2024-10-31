"use client";
import React from 'react';
import Image from 'next/image';
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
      <Image
          src="/icons/banner1.svg"
          alt="Banner"
          width={500}  // Genişliği buraya uygun bir değer olarak ayarlayın
          height={300} // Yüksekliği buraya uygun bir değer olarak ayarlayın
          className={styles.bannerImage}
        />
      </div>
    </div>
  );
}
