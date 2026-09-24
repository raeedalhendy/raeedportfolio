import { services } from '../data/services';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container services__layout">
        <header className="services__intro">
          <p className="eyebrow" dir="ltr">02 / WHAT I DO</p>
          <h2 id="services-title" className="services__title">من الفكرة،<br />إلى التنفيذ<span>.</span></h2>
          <p className="services__description">لكل مشروع احتياجاته. أختار الحل المناسب لفكرتك، وأعتني بالتفاصيل التي تصنع الفرق.</p>
          <a className="services__link" href="#contact">
            لنناقش مشروعك
            <span aria-hidden="true">↙</span>
          </a>
        </header>

        <ol className="services__list">
          {services.map((service, index) => (
            <li key={service.id} className="services__item">
              <span className="services__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="services__item-content">
                <h3>{service.nameAr}</h3>
                <p>{service.description}</p>
                <span className="services__english" lang="en" dir="ltr">{service.name}</span>
              </div>
              <span className="services__mark" aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Services;
