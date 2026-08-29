import { profile } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="about section">
      <div className="container" ref={ref}>
        <motion.div
          className={`about__content ${isVisible ? 'about__content--visible' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about__text">
            <h2 className="about__title">عني</h2>
            <p className="about__role">{profile.title}</p>
            <div className="about__bio">
              <p>{profile.about}</p>
            </div>
          </div>

          <div className="about__visual">
            <motion.div className="about__logo-card" whileHover={{ y: -7, rotate: -1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
              <img src={logo} alt="Raeed Alhendy" className="about__logo" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
