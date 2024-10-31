"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductsCarousel.module.css';

const products = [
  {
    image: '/icons/product1.svg',
    description: 'Hafif, dayanıklı ve ekonomik çözüm.'
  },
  {
    image: '/icons/product2.svg',
    description: 'Yüklerinizi güvenle sabitleyin.'
  },
  {
    image: '/icons/product3.svg',
    description: 'Çevre dostu ve yeniden kullanılabilir.'
  },
  {
    image: '/icons/product4.svg',
    description: 'Kolay taşınabilir ve güçlü performans.'
  }
];

export default function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProducts = 3; // Aynı anda 2 tam, 1 yarım kutucuk gösterilecek

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - visibleProducts ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.h2Name}>Ürünlerimiz ve Avantajları</h2>
      <p className={styles.pName}>Dunnage bag, yük sabitleme alanında hem hafif hem de dayanıklı çözümler sunar.</p>
      <div className={styles.carousel}>
        <button
          onClick={handlePrevious}
          className={`${styles.arrowButton} ${styles.left}`}
        >
          ◀
        </button>
        <div
          className={styles.carouselWrapper}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
          }}
        >
          {products.map((product, index) => (
            <div key={index} className={styles.carouselItem}>
              <Image 
                src={product.image} 
                alt="Product" 
                className={styles.carouselImage} 
                width={200} 
                height={200} 
              />
              <div className={styles.description}></div>
              <div className={styles.textOverlay}>{product.description}</div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`${styles.arrowButton} ${styles.right}`}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
