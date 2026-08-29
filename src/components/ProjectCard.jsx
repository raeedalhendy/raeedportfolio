import './ProjectCard.css';
import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  const isApp = project.type === 'app';

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className={`project-card__image-wrapper ${isApp ? 'project-card__image-wrapper--app' : ''}`}>
        {isApp && project.images ? (
          <div className="project-card__phones" aria-label={`لقطات من تطبيق ${project.name}`}>
            {project.images.slice(0, 3).map((image, imageIndex) => (
              <div className="project-card__phone" key={image}>
                <span className="project-card__phone-speaker"></span>
                <img src={image} alt={`واجهة ${project.name} رقم ${imageIndex + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <div className="project-card__browser">
            <div className="project-card__browser-bar">
              <span></span><span></span><span></span>
              <div className="project-card__browser-address">{project.link?.replace(/^https?:\/\//, '').replace(/\/$/, '')}</div>
            </div>
            <img src={project.image} alt={`واجهة مشروع ${project.name}`} className="project-card__image" loading="lazy" />
          </div>
        ) : (
          <div className="project-card__placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span>صورة المشروع</span>
          </div>
        )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__footer">
          <span className="project-card__category">{project.categoryLabel}</span>
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              زيارة الموقع
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
