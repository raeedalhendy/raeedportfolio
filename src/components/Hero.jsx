import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import logo from '../assets/logo.png';
import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Logo */}
        <motion.div
          className="hero__logo-wrapper hero__logo-wrapper--visible"
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={logo} alt="Raeed Alhendy — Full-Stack Developer" className="hero__logo" />
        </motion.div>

        

        {/* CTA Buttons */}
        <motion.div
          className="hero__buttons hero__buttons--visible"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollToSection('contact')}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            تواصل معي
          </motion.button>
          <motion.button
            className="hero__btn hero__btn--secondary"
            onClick={() => scrollToSection('projects')}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            استعرض مشاريعي
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle background decoration */}
      <div className="hero__bg-decoration"></div>
    </section>
  );
}

export default Hero;
