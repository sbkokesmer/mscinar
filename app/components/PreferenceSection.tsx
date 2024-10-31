import React from 'react';
import styles from './PreferenceSection.module.css';

const PreferenceSection: React.FC = () => {
  return (
    <section className={styles.simpleSection}>
      <h1 className={styles.title}>Dunnage Bag Tercih Etmenin Faydaları</h1>
      <p className={styles.description}>
        Dunnage bag, taşımacılıkta yüklerin güvenliğini sağlamanın en etkili yollarından biridir. Hareketi
        engelleyerek kırılma veya hasar riskini en aza indirir. Bu sayede taşımacılık maliyetlerini düşürür ve iş
        süreçlerinizi hızlandırır.
      </p>

      <div className={styles.imageWrapper}>
        <img
            src='/icons/preference.svg'
            className={styles.svgIcon}
            />
      </div>
    </section>
  );
};

export default PreferenceSection;
