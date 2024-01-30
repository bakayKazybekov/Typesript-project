import { instagram, telegram, tikTok } from '../../images';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts__wrapper">
      <section className="contacts__links">
        <a className="link__wrapper" target="_blank" href="https://www.instagram.com/bkazybekov_/">
          <img src={instagram} alt="instagram" />
        </a>
        <a className="link__wrapper" target="_blank" href="https://www.tiktok.com/@barcelunya">
          <img src={tikTok} alt="tik-tok" />
        </a>
        <a className="link__wrapper" target="_blank" href="https://t.me/barcelunya">
          <img src={telegram} alt="telegram" />
        </a>
      </section>
    </div>
  );
};

export default Contacts;
