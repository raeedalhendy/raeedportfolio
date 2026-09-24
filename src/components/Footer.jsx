import { profile } from '../data/profile';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <a href="#top" className="footer__brand" aria-label="رائد الهندي، العودة إلى البداية" lang="en" dir="ltr">RA<span>.</span></a>
        <p className="footer__copyright" dir="ltr">© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="footer__top">العودة إلى الأعلى <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

export default Footer;
