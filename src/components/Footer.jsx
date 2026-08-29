import { profile } from '../data/profile';
import logo from '../assets/logo.png';
import './Footer.css';

function Footer() {
  const whatsappLink = profile.contact.whatsapp 
    ? `https://wa.me/${profile.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`
    : '#';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo"><img src={logo} alt="" /></div>
            <div className="footer__info">
              <p className="footer__name">{profile.name}</p>
              <p className="footer__title">{profile.title}</p>
            </div>
          </div>

          <div className="footer__links">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              واتساب
            </a>
            <a 
              href={profile.contact.telegram || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              تيليغرام
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {profile.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
