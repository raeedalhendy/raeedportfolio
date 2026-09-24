import { skills } from '../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <header className="skills__header">
          <div>
            <p className="section-label"><span>03</span> التقنيات والأدوات</p>
            <h2 id="skills-title" className="skills__title">مهاراتي التقنية<span>.</span></h2>
          </div>
          <p className="skills__intro">من بناء الواجهة إلى إطلاق المشروع، أستخدم هذه التقنيات والأدوات لتحويل الأفكار إلى تجارب رقمية متكاملة.</p>
        </header>

        <ul className="skills__grid">
          {skills.map((skill, index) => (
            <li key={skill.id} className="skills__item">
              <span className="skills__number" dir="ltr" aria-hidden="true">/{String(index + 1).padStart(2, '0')}</span>
              <h3>{skill.title}</h3>
              <p className="skills__description">{skill.description}</p>
              <ul className="skills__technologies" aria-label={`تقنيات ${skill.title}`}>
                {skill.technologies.map((technology) => (
                  <li key={technology} lang="en" dir="ltr">{technology}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
