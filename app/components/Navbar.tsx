import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className='container-2'>
        <div className={styles.logo}>
          <Image 
            src='/icons/logo.svg' 
            alt="Logo" 
            width={150} // Genişliği belirtin
            height={50}  // Yüksekliği belirtin
          />
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
