"use client";

import Image from 'next/image';
import styles from './BannerDescription.module.css';

export default function BannerDescription() {
  return (
    <section id="banner-description" className={styles.descriptionContainer}>
      <h2 className={styles.title}>Çınar Dunnage Bag ile Tanışın!</h2>
      <p className={styles.subtitle}>
        Yenilikçi ve dinamik bir firma olarak, yük güvenliğine odaklanarak güvenilir çözümler sunuyoruz. İnovatif ürünlerimizle müşteri memnuniyeti sağlıyoruz.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <Image src="/icons/security.svg" alt="Güvenlik" className={styles.icon} width={50} height={50} />
        </div>
        <div className={styles.feature}>
          <Image src="/icons/innovation.svg" alt="İnovasyon" className={styles.icon} width={50} height={50} />
        </div>
        <div className={styles.feature}>
          <Image src="/icons/customer.svg" alt="Müşteri Memnuniyeti" className={styles.icon} width={50} height={50} />
        </div>
        <div className={styles.feature}>
          <Image src="/icons/quality.svg" alt="Kalite" className={styles.icon} width={50} height={50} />
        </div>
      </div>
    </section>
  );
}
