import { useState, useMemo } from 'react';
import { projects, categories } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, isVisible } = useScrollAnimation(0.05);

  // Filter categories that have projects
  const activeCategories = useMemo(() => {
    const usedCategories = new Set(projects.map(p => p.category));
    return categories.filter(cat => 
      cat.id === 'all' || usedCategories.has(cat.id)
    );
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Map category IDs to labels for display
  const projectsWithLabels = useMemo(() => {
    const catMap = Object.fromEntries(categories.map(c => [c.id, c.label]));
    return filteredProjects.map(p => ({
      ...p,
      categoryLabel: catMap[p.category] || p.category,
    }));
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects section section-alt">
      <div className="container" ref={ref}>
        <div className={`projects__header ${isVisible ? 'projects__header--visible' : ''}`}>
          <h2 className="projects__title">المشاريع</h2>
          <p className="projects__subtitle">مجموعة من المشاريع التي عملت على تطويرها</p>
        </div>

        {activeCategories.length > 1 && (
          <div className={isVisible ? 'fade-in' : ''}>
            <CategoryFilter
              categories={activeCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        )}

        {projectsWithLabels.length > 0 ? (
          <div className="projects__grid">
            {projectsWithLabels.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className={`projects__empty ${isVisible ? 'projects__empty--visible' : ''}`}>
            <div className="projects__empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <p className="projects__empty-text">
              {activeCategory === 'all' 
                ? 'المشاريع قيد الإضافة قريباً'
                : 'لا توجد مشاريع في هذا التصنيف حالياً'
              }
            </p>
            <p className="projects__empty-hint">
              يمكنك إضافة مشاريعك من ملف <code>src/data/projects.js</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
