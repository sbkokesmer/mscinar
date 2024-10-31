// components/HeaderTop.tsx
"use client";

import styles from './HeaderTop.module.css';


export default function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      <div className='container-2'>
        <div className={styles.left}>
          <p>Ekonomik seçimlerle kaliteli hizmetin tadını çıkarın!</p>
        </div>
        <div className={styles.right}>
          <p>Bizi Arayın: +1 (234) 567-890</p> 
          <p>Email: support@mybrand.com</p>
        </div>
      </div>
    </div>
  );
}
