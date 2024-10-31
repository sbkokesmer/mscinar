"use client";
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h1>BİZE ULAŞIN!</h1>
          <div className={styles.whiteBox}>
            <p>
                Her türlü sorunuzda yanınızdayız. Ürünlerimiz hakkında detaylı bilgi almak ve lojistik süreçlerinize en uygun çözümleri bulmak için bizlerle iletişime geçebilirsiniz.
            </p>
          </div>
          <div className={styles.info}>
            <h2>İLETİŞİM:</h2>
            <div className={styles.whiteBox}>
                <p>+1 (234) 567-890</p>
            </div>
            <div className={styles.whiteBox}>
                <p>support@mybrand.com</p>
            </div>
          </div>
          <div className={styles.address}>
            <h2>ADRES:</h2>
            <div className={styles.whiteBox}>
                <p>Atatürk Caddesi, Seyhan Mahallesi, No:123, Seyhan, 01060, Adana, Türkiye</p>
            </div>
          </div>

        </div>
        
        <div className={styles.rightColumn}>
          <h2 className={styles.h2}>İLETİŞİM FORMU</h2>
          <form className={styles.form}>
            <label>Ad Soyad:</label>
            <input type="text" name="name" />

            <label>Tel No:</label>
            <input type="tel" name="phone" />

            <label>Konu Başlığı:</label>
            <input type="text" name="subject" />

            <label>Notunuz:</label>
            <textarea name="message"></textarea>

            <button className='ctaButton' type="submit">GÖNDER</button>
          </form>
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2>HARİTADAN İNCELE!</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.674582551307!2d35.323039025554436!3d37.00270402628842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f16c1937d8f1%3A0xdb2e1b14b8729d4d!2sAdana%20Valili%C4%9Fi!5e0!3m2!1str!2str!4v1678705480402!5m2!1str!2str" 
          width="100%" 
          height="450" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}
