import { profile } from '../data/profile';
import './About.css';

function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container about__layout">
        <div className="about__text">
          <p className="eyebrow" dir="ltr">04 / THE PERSON BEHIND THE CODE</p>
          <h2 id="about-title" className="about__title">أهلًا، أنا رائد<span> :)</span></h2>
          <p className="about__role">{profile.title}</p>
          <div className="about__bio">
            <p>{profile.about}</p>
            <p>{profile.aboutDetail}</p>
          </div>
          <div className="about__signature" lang="en" dir="ltr">
            <span className="about__signature-line" aria-hidden="true" />
            {profile.name}
          </div>
        </div>

        <div className="about__visual">
          <div className="about__note-header" aria-hidden="true">
            <span dir="ltr">A LITTLE ABOUT MY APPROACH</span>
            <span className="about__asterisk">✳</span>
          </div>
          <p className="about__statement">الفكرة لك.<br />والتفاصيل<br /><span>مهمّتي.</span></p>
          <div className="about__note-footer" aria-hidden="true">
            <span dir="ltr">&lt; / &gt;</span>
            <span>من الفكرة إلى أدقّ التفاصيل</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
