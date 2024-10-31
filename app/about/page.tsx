"use client";

import Image from 'next/image';
import styles from './About.module.css';
import '../globals.css';

export default function AboutPage() {
  return (
    <div className='container-2'>
      <div className={styles.aboutContainer}>
        <div className={styles.imageColumn}>
          <Image 
            src="/icons/dunnage-bag-image.svg" 
            alt="Dunnage Bag Image" 
            width={500} 
            height={500} 
            priority
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.textSection}>
            <h2>Misyonumuz</h2>
            <p>Sektörümüzde yenilikçi, güvenilir ve müşteri odaklı çözümler sunarak, global pazarda lider konuma gelmeyi hedefliyoruz. Her adımda değişime öncülük eden ve çevreye duyarlı bir yaklaşımla hareket eden bir marka olarak, paydaşlarımızla sürdürülebilir bir geleceği inşa etmeyi amaçlıyoruz.</p>
          </div>
          <div className={styles.textSection}>
            <h2>Vizyonumuz</h2>
            <p>Müşterilerimizin iş süreçlerini kolaylaştıran, verimli ve güvenli çözümler sunarak, yük taşımacılığında hasarları ve kayıpları en aza indiren, çevre dostu ve yenilikçi ürünler üretmekteyiz. Kalitemizden ödün vermeden, sürdürülebilirlik ve müşteri memnuniyeti odaklı çalışarak, tüm paydaşlarımıza ve topluma değer katmayı hedefliyoruz.</p>
          </div>
          <div className={styles.textSection}>
            <h2>Çevreye Duyarlılık</h2>
            <p>Çınar Dunnage Bag olarak çevreye duyarlılığı ön planda tutuyoruz. Ürünlerimiz tekrar kullanılabilir özellikte olup, çevresel etkileri azaltmayı hedefler. Sürdürülebilir bir lojistik için, çevre dostu çözümler sunuyoruz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
