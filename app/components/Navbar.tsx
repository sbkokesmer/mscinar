import { useState } from 'react';
import styles from './Navbar.module.css';

type NavbarProps = {
  onChangeLanguage: (lang: 'en' | 'tr') => void;
  currentLanguage: 'en' | 'tr';
  translations: {
    home: string;
    about: string;
    contact: string;
    language: string;
  };
};

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className='container-2'>
        <div className={styles.logo}>
          <img src='/icons/logo.svg' alt="Logo" />
        </div>
        <div className={styles.links}>
          <a href="/" className={styles.link}>Anasayfa</a>
          <a href="/about" className={styles.link}>Hakkımızda</a>
          <a href="/contact" className={styles.link}>İletişim</a>
        </div>
      </div>
    </nav>
  );
}
