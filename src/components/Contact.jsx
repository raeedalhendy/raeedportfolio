import { useState } from 'react';
import { profile } from '../data/profile';
import './Contact.css';

function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const whatsappLink = `https://wa.me/${profile.contact.whatsapp.replace(/\D/g, '')}`;

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(profile.contact.whatsapp);
      setCopyStatus('تم نسخ الرقم. يسعدني تواصلك!');
    } catch {
      setCopyStatus('تعذّر النسخ. يمكنك تحديد الرقم ونسخه يدويًا.');
    }
  }

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__topline">
          <p className="eyebrow" dir="ltr">05 / LET’S MAKE IT HAPPEN</p>
          <span className="contact__spark" aria-hidden="true">✳</span>
        </div>

        <div className="contact__layout">
          <h2 id="contact-title" className="contact__title">لديك فكرة؟<br /><span>لنبنِها معًا.</span></h2>
          <div className="contact__details">
            <p className="contact__description">حدّثني عن فكرتك، وما أنجزته حتى الآن، وما تحتاج إليه. ننطلق من هنا لنحدّد الخطوة التالية معًا.</p>
            <div className="contact__links">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact__link contact__link--primary">
                <span>تواصل عبر واتساب</span>
                <span className="contact__link-arrow" aria-hidden="true">↗</span>
              </a>
              <a href={profile.contact.telegram} target="_blank" rel="noopener noreferrer" className="contact__link contact__link--secondary">
                <span>أو عبر تيليغرام</span>
                <span className="contact__link-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact__phone-row">
              <span className="contact__phone" dir="ltr">{profile.contact.whatsapp}</span>
              <button type="button" onClick={copyPhone} className="contact__copy" aria-label="نسخ رقم الهاتف">نسخ الرقم <span aria-hidden="true">⧉</span></button>
            </div>
            <p className="contact__copy-status" role="status" aria-live="polite">{copyStatus}</p>
          </div>
        </div>

        <div className="contact__bottomline">
          <span>فكرة واضحة. تفاصيل مدروسة. عمل نفتخر به.</span>
          <span dir="ltr" lang="en">GOOD THINGS START WITH A CONVERSATION.</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
