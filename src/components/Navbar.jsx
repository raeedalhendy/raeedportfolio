import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const links = [
  { id: 'projects', label: 'أعمالي' },
  { id: 'services', label: 'خدماتي' },
  { id: 'skills', label: 'مهاراتي' },
  { id: 'about', label: 'عنّي' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuButton = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px' });
    ['top', ...links.map(link => link.id), 'contact'].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
      if (event.type === 'pointerdown' && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = event => { if (event.matches) setMenuOpen(false); };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', dismiss);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', dismiss);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar" ref={header}>
      <nav className="navbar__container container" aria-label="التنقل الرئيسي">
        <a className="navbar__brand" href="#top" onClick={closeMenu} aria-label="رائد الهندي — الرئيسية">
          <span className="navbar__monogram" dir="ltr">ra<span>.</span></span>
          <span className="navbar__identity"><strong>رائد الهندي</strong><small dir="ltr">DEVELOPER & MAKER</small></span>
        </a>
        <div className="navbar__links">
          {links.map(link => <a key={link.id} href={'#' + link.id} className={active === link.id ? 'is-active' : ''} aria-current={active === link.id ? 'location' : undefined}>{link.label}</a>)}
        </div>
        <a className="navbar__contact" href="#contact" onClick={closeMenu}>لنتواصل <span aria-hidden="true">↖</span></a>
        <button ref={menuButton} className={'navbar__toggle ' + (menuOpen ? 'is-open' : '')} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} aria-controls="mobile-nav"><span /><span /></button>
      </nav>
      <nav id="mobile-nav" className="navbar__mobile" aria-label="قائمة التنقل على الهاتف" hidden={!menuOpen}>
        {links.map(link => <a key={link.id} href={'#' + link.id} onClick={closeMenu}>{link.label}<span aria-hidden="true">↖</span></a>)}
        <a href="#contact" onClick={closeMenu}>لنتواصل<span aria-hidden="true">↖</span></a>
      </nav>
    </header>
  );
}

export default Navbar;
