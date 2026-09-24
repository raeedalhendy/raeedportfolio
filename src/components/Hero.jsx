import reno from '../assets/optimized/reno1.webp';
import nauStore from '../assets/optimized/nau1.webp';
import './Hero.css';

function Arrow({ diagonal = false }) {
  return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M18 18 6 6M6 17V6h11' : 'M20 12H4m7-7-7 7 7 7'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__intro container">
        <div className="hero__copy">
          <div className="hero__kicker"><span className="hero__dot" />أهلًا، أنا رائد <span className="hero__kicker-line" /><span lang="en" dir="ltr">FULL-STACK DEVELOPER</span></div>
          <h1 id="hero-title">فكرتك،<br />بكلّ <span className="hero__headline-accent">تفاصيلها.<svg viewBox="0 0 320 17" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12C90 2 190 2 316 7M25 16C110 7 217 7 290 11" /></svg></span></h1>
          <p className="hero__description">أطوّر مواقع وتطبيقات تجمع بين جمال التصميم وإتقان التنفيذ. من الفكرة الأولى إلى تجربة يسعد الناس باستخدامها.</p>
          <div className="hero__actions"><a href="#projects" className="button button--primary">استعرض أعمالي<Arrow /></a><a href="#contact" className="button button--text">حدّثني عن فكرتك<Arrow diagonal /></a></div>
          <div className="hero__signature"><span className="hero__signature-mark" aria-hidden="true">&lt;/&gt;</span><p>اهتمام بالشكل.<br /><strong>واختبار لكل تفصيل.</strong></p></div>
        </div>
        <a className="hero__showcase" href="#projects" aria-label="استعرض أعمالي في تطوير المواقع وتطبيقات الهاتف">
          <div className="hero__showcase-top"><span lang="en" dir="ltr">A FEW THINGS I'VE BUILT</span><span className="hero__showcase-spark" aria-hidden="true">✳</span></div>
          <div className="hero__orbit" aria-hidden="true" />
          <div className="hero__browser">
            <div className="hero__browser-bar" aria-hidden="true"><i /><i /><i /><span>shop-design-rose.vercel.app</span></div>
            <img src={nauStore} width="1600" height="1007" alt="واجهة متجر NAU للأزياء" fetchpriority="high" />
          </div>
          <div className="hero__phone"><div className="hero__phone-camera" aria-hidden="true" /><img src={reno} width="720" height="1453" alt="واجهة تطبيق Reno للأندرويد" fetchpriority="high" /></div>
          <span className="hero__floating-note"><span aria-hidden="true">↗</span>من الفكرة إلى الشاشة.</span>
          <div className="hero__showcase-bottom"><span>ويب. تطبيقات. تفاصيل.</span><span className="hero__showcase-arrow" aria-hidden="true">↖</span></div>
        </a>
      </div>
      <div className="hero__bottom container">
        <span className="hero__scroll"><span aria-hidden="true">↓</span>اكتشف ما أنجزته.</span>
        <div className="hero__disciplines"><span>تطوير الويب</span><i aria-hidden="true" /><span>تطبيقات الهاتف</span><i aria-hidden="true" /><span>متاجر إلكترونية</span></div>
        <span className="eyebrow" lang="en" dir="ltr">THOUGHTFULLY BUILT.</span>
      </div>
    </section>
  );
}
export default Hero;
