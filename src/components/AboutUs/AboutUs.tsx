import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.title}>
        <h4>Казыбеков Бакай</h4>
      </section>
      <section className={styles.info}>
        <div>Дата рождения: 2006 год, 14 октября</div>
      </section>
    </div>
  );
};

export default AboutUs;
