import { instagram, telegram, tikTok } from '../../images';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.links}>
        <a className={styles.link_wrapper} target="_blank" href="https://www.instagram.com/bkazybekov_/">
          <img src={instagram} alt="instagram" />
        </a>
        <a className={styles.link_wrapper} target="_blank" href="https://www.tiktok.com/@barcelunya">
          <img src={tikTok} alt="tik-tok" />
        </a>
        <a className={styles.link_wrapper} target="_blank" href="https://t.me/barcelunya">
          <img src={telegram} alt="telegram" />
        </a>
      </section>
    </div>
  );
};

export default Contacts;
