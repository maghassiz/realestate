import { ph } from '../lib/placeholder';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__frame">
        <img className="hero__image" src={ph('hero-main', 1400, 800)} alt="Modern house exterior at dusk with warm interior lighting" />
        <div className="hero__gradient" aria-hidden="true"></div>
        <h1 className="hero__title">
          <p>Exceptional glazing for those</p>
          <p>who build with vision.</p>
        </h1>
        <p className="hero__text">Located in carefully selected neighborhoods, each property is designed to balance comfort, functionality, and long-term value. From natural light to spatial flow, every detail is considered to create a home for everyday living.</p>
        <div className="hero__side-image">
          <img src={ph('hero-side', 249, 140)} alt="Cozy living room interior with natural light" />
        </div>
      </div>
      <div className="hero__cta">
        <button className="btn btn--light" type="button" style={{ background: '#f2f0ec', color: '#212325' }}>VIEW PROJECT</button>
        <span className="btn-icon" style={{ background: '#f2f0ec' }} aria-hidden="true">
          <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#212325" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </span>
      </div>
    </section>
  );
}
