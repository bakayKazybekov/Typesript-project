import './AboutUs.scss';

// ??? types
const AboutUs: React.FC = () => {
  return (
    <div className="about-us__wrapper">
      <section className="about-us__title">
        <h4>Казыбеков Бакай</h4>
      </section>
      <section className="about-us__info">
        <div>Дата рождения: 2006 год, 14 октября</div>
      </section>
    </div>
  );
};

export default AboutUs;
