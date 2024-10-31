"use client";

import { useEffect } from 'react';
import styles from './WhyChooseUs.module.css';
import Image from 'next/image';

export default function WhyChooseUs() {
  // Scroll animasyonu için IntersectionObserver kullanımı
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Yazı veya görsel göründüğünde 'inView' sınıfını ekler
                entry.target.classList.add(styles.inView);
            } else {
                // Görünüm alanı dışına çıkınca 'inView' sınıfını kaldırır
                entry.target.classList.remove(styles.inView);
            }
        });
    });

    // Paragrafları gözlemlemek için
    const paragraphs = document.querySelectorAll(`.${styles.rightColumn} p`);
    paragraphs.forEach(p => observer.observe(p));

    // Görseli gözlemlemek için
    const image = document.querySelector(`.${styles.bagImage}`);
    if (image) {
        observer.observe(image);
    }

    return () => {
        // Temizleme işlemi
        paragraphs.forEach(p => observer.unobserve(p));
        if (image) {
            observer.unobserve(image);
        }
    };
}, []);


  return (
    <div className={styles.whyChooseContainer}>
      <div className={styles.leftColumn}>
        <h1>NEDEN</h1>
        <h2>Bizi Tercih Etmelisiniz?</h2>
      </div>
      <div className={styles.rightColumn}>
        <p>Çınar Dunnage Bag olarak, uzun yılların deneyimini ve kalite anlayışını bir araya getiriyoruz.</p>
        <p>Ürünlerimiz, dayanıklı yapılarıyla kargonuzu en güvenli şekilde korur.</p>
        <p>Kolay kullanımı, tekrar kullanılabilir yapısı ve ekonomik çözümler sunmasıyla, sektörde fark yaratıyoruz.</p>
        <p>Müşteri odaklı yaklaşımımızla, lojistik çözümlerinizde sürdürülebilir ve güvenilir bir partneriz.</p>
      </div>
      <Image 
        src="/icons/dunnage-bag.svg" 
        alt="Dunnage Bag" 
        className={styles.bagImage} 
        width={600} // Görselin genişliği
        height={300} // Görselin yüksekliği
      />
    </div>
  );
}
