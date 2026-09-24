import { useEffect, useRef, useState } from 'react';
import './ProjectDialog.css';

function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  const touchStart = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const isApp = project.type === 'app';
  const images = project.images?.length ? project.images : [project.image];
  const hasGallery = images.length > 1;
  const imageCountLabel = images.length === 1
    ? 'لقطة'
    : images.length === 2
      ? 'لقطتان'
      : `${images.length} ${images.length <= 10 ? 'لقطات' : 'لقطة'}`;

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, []);

  const changeImage = (direction) => {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (!hasGallery || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      changeImage(event.key === 'ArrowLeft' ? 1 : -1);
    }
  };

  const handlePointerUp = (event) => {
    if (!touchStart.current || !hasGallery) return;
    const deltaX = event.clientX - touchStart.current.x;
    const deltaY = event.clientY - touchStart.current.y;
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
      changeImage(deltaX > 0 ? 1 : -1);
    }
    touchStart.current = null;
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <div className="project-dialog__header">
        <span className="eyebrow" dir="ltr">PROJECT / {project.number}</span>
        <button type="button" className="project-dialog__close" onClick={onClose} aria-label="إغلاق تفاصيل المشروع" autoFocus>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
        </button>
      </div>

      <div className="project-dialog__layout">
        <div className="project-dialog__gallery">
          <div
            className={`project-dialog__image-stage ${isApp ? 'project-dialog__image-stage--app' : ''}`}
            style={{ '--project-stage': project.stageColor }}
            onPointerDown={(event) => {
              if (event.pointerType === 'touch') touchStart.current = { x: event.clientX, y: event.clientY };
            }}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { touchStart.current = null; }}
          >
            <img
              src={images[activeImage]}
              alt={`واجهة ${project.name} — الصورة ${activeImage + 1} من ${images.length}`}
              decoding="async"
            />
          </div>

          <div className="project-dialog__gallery-controls">
            <p className="project-dialog__image-count" aria-live="polite" aria-atomic="true">الصورة {activeImage + 1} من {images.length}</p>
            {hasGallery && (
              <div className="project-dialog__arrows">
                <button type="button" onClick={() => changeImage(-1)} aria-label="الصورة السابقة"><span aria-hidden="true">→</span></button>
                <button type="button" onClick={() => changeImage(1)} aria-label="الصورة التالية"><span aria-hidden="true">←</span></button>
              </div>
            )}
          </div>

          {hasGallery && (
            <div className={`project-dialog__thumbnails ${isApp ? '' : 'project-dialog__thumbnails--web'}`} role="group" aria-label="اختيار صورة المشروع">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={activeImage === index ? 'project-dialog__thumbnail project-dialog__thumbnail--active' : 'project-dialog__thumbnail'}
                  aria-label={`عرض الصورة ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-dialog__details">
          <span className="project-dialog__category">{project.categoryLabel}</span>
          <h2 id="project-dialog-title"><bdi>{project.name}</bdi></h2>
          <p id="project-dialog-description">{project.description}</p>
          <dl className="project-dialog__facts">
            <div><dt>نوع المشروع</dt><dd>{isApp ? 'تطبيق أندرويد' : 'موقع ويب'}</dd></div>
            <div><dt>معرض المشروع</dt><dd>{imageCountLabel} من {isApp ? 'التطبيق' : 'الموقع'}</dd></div>
          </dl>
          {project.link && (
            <a className="project-dialog__visit" href={project.link} target="_blank" rel="noopener noreferrer">
              زيارة الموقع <span aria-hidden="true">↗</span>
            </a>
          )}
          <a className="project-dialog__full-image" href={images[activeImage]} target="_blank" rel="noopener noreferrer">فتح الصورة بالحجم الكامل <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </dialog>
  );
}

export default ProjectDialog;
