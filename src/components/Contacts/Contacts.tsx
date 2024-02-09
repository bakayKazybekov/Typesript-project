import { instagramIcon, tikTokIcon, telegramIcon } from '../../images';
import './Contacts.scss';

const contactsLinks = [
  { imageSrc: instagramIcon, imageAlt: 'instagram', linkHref: 'https://www.instagram.com/bkazybekov_/' },
  { imageSrc: tikTokIcon, imageAlt: 'tik-tok', linkHref: 'https://www.tiktok.com/@barcelunya' },
  { imageSrc: telegramIcon, imageAlt: 'telegram', linkHref: 'https://t.me/barcelunya' },
];

const Contacts = () => {
  return (
    <div className="contacts__wrapper">
      <section className="contacts__links">
        {contactsLinks.map(({ imageSrc, imageAlt, linkHref }) => (
          <a key={imageAlt} className="link__wrapper" target="_blank" href={linkHref}>
            <img src={imageSrc} alt={imageAlt} />
          </a>
        ))}
      </section>
    </div>
  );
};

export default Contacts;
