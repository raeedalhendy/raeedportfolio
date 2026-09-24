import { useMemo, useState } from 'react';
import { projects, categories } from '../data/projects';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import './Projects.css';

const categoryLabels = Object.fromEntries(categories.map(({ id, label }) => [id, label]));
const portfolio = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, '0'),
  categoryLabel: categoryLabels[project.category],
}));
const availableCategories = categories
  .map((category) => ({
    ...category,
    count: category.id === 'all'
      ? projects.length
      : projects.filter((project) => project.category === category.id).length,
  }))
  .filter((category) => category.count > 0);

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = useMemo(() => (
    activeCategory === 'all'
      ? portfolio
      : portfolio.filter((project) => project.category === activeCategory)
  ), [activeCategory]);

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="section-label"><span>01</span> أعمال مختارة</p>
            <h2 id="projects-title" className="projects__title">أفكار أصبحت واقعًا<span>.</span></h2>
          </div>
          <div className="projects__intro">
            <span className="eyebrow" dir="ltr">SELECTED WORK / 01</span>
            <p>من المتاجر الإلكترونية إلى تطبيقات الهاتف، هذه مجموعة من المشاريع التي عملت عليها.</p>
          </div>
        </div>

        <div className="projects__toolbar">
          <CategoryFilter
            categories={availableCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <p className="projects__count" aria-live="polite" aria-atomic="true">
            <span dir="ltr">{String(visibleProjects.length).padStart(2, '0')}</span> مشاريع
          </p>
        </div>

        <div className="projects__grid" id="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={activeCategory === 'all' && index === 0}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
          {activeCategory === 'all' && (
            <a className="projects__next" href="#contact">
              <span className="eyebrow" dir="ltr">THE NEXT CHAPTER</span>
              <div>
                <span className="projects__next-title">والمشروع القادم؟<br />قد يكون مشروعك.</span>
                <span className="projects__next-link">لنتحدّث <span aria-hidden="true">↖</span></span>
              </div>
              <span className="projects__next-number" aria-hidden="true">{String(projects.length + 1).padStart(2, '0')}</span>
            </a>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
