import { instagramIcon, tikTokIcon, telegramIcon } from '../../images';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts__wrapper">
      <section className="contacts__links">
        <a className="link__wrapper" target="_blank" href="https://www.instagram.com/bkazybekov_/">
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a className="link__wrapper" target="_blank" href="https://www.tiktok.com/@barcelunya">
          <img src={tikTokIcon} alt="tik-tok" />
        </a>
        <a className="link__wrapper" target="_blank" href="https://t.me/barcelunya">
          <img src={telegramIcon} alt="telegram" />
        </a>
      </section>
    </div>
  );
};

export default Contacts;
