import './CategoryFilter.css';

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter" role="group" aria-label="تصفية المشاريع حسب النوع">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-filter__btn ${activeCategory === category.id ? 'category-filter__btn--active' : ''}`}
          aria-pressed={activeCategory === category.id}
          aria-controls="projects-grid"
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
          <span className="category-filter__count" aria-hidden="true">{category.count}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
