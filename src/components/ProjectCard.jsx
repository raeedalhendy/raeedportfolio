import './ProjectCard.css';

function ProjectCard({ project, featured = false, onOpen }) {
  const isApp = project.type === 'app';

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <button
        type="button"
        className={`project-card__stage ${isApp ? 'project-card__stage--app' : ''}`}
        style={{ '--project-stage': project.stageColor }}
        onClick={onOpen}
        aria-label={`عرض صور وتفاصيل مشروع ${project.name}`}
        aria-haspopup="dialog"
      >
        <span className="project-card__stage-label" dir="ltr" aria-hidden="true">{isApp ? 'MOBILE EXPERIENCE' : 'WEB EXPERIENCE'}</span>
        {isApp ? (
          <span className="project-card__phones" aria-hidden="true">
            {project.images.slice(0, 2).map((image) => (
              <span className="project-card__phone" key={image}>
                <img src={image} alt="" loading="lazy" decoding="async" width="1080" height="2180" />
              </span>
            ))}
          </span>
        ) : (
          <span className="project-card__browser">
            <span className="project-card__browser-bar" aria-hidden="true">
              <span /><span /><span />
              <span className="project-card__browser-address">{project.link?.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
            </span>
            <img
              src={project.image || project.images?.[0]}
              alt={`الواجهة الرئيسية لمشروع ${project.name}`}
              className="project-card__image"
              loading="lazy"
              decoding="async"
              width="1895"
              height="1126"
            />
          </span>
        )}
        <span className="project-card__expand" aria-hidden="true">↗</span>
      </button>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__category">{project.categoryLabel}</span>
          <span className="project-card__number" dir="ltr">/{project.number}</span>
        </div>
        <h3 className="project-card__name"><bdi>{project.name}</bdi></h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__footer">
          <button type="button" className="project-card__details" onClick={onOpen} aria-haspopup="dialog" aria-label={`عن المشروع: ${project.name}`}>
            عن المشروع
            <span aria-hidden="true">↖</span>
          </button>
          {featured && project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__live">
              زيارة الموقع <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
