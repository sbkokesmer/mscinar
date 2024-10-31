import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        {/* Sol Kısım: Logo ve Adres Bilgileri */}
        <div className={styles.footerColumn}>
          <div className={styles.logoWrapper}>
            <Image
              src="/icons/logo.svg"
              className={styles.logo}
              alt="MSCINAR Logo"
              width={100} // Görselin genişliğini belirtin
              height={50} // Görselin yüksekliğini belirtin
            />
          </div>
          <p className={styles.address}>Atatürk Caddesi, Seyhan Mahallesi, No:123, Seyhan, 01060, Adana, Türkiye</p>
        </div>

        {/* Orta Kısım: Sayfa Linkleri */}
        <div className={styles.footerColumn}>
          <h3>Sayfalar</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>

        {/* Sağ Kısım: İletişim Bilgileri ve Sosyal Medya İkonları */}
        <div className={styles.footerColumn}>
          <h3>İletişim</h3>
          <p className={styles.phone}>+1 (234) 567-890</p>
          <p className={styles.email}>support@mybrand.com</p>
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
    </footer>
  );
};

export default Footer;
