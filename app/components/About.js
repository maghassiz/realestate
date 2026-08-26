import Label from './Label';

export default function About() {
  return (
    <section className="about" aria-label="About Real Estate">
      <div className="about__inner">
        <div className="about__label-wrap">
          <Label text="ABOUT REAL ESTATE" />
          <h2 className="about__heading">We help people find homes that truly match how they live, carefully selected and designed for lasting comfort and value.</h2>
        </div>
        <div className="btn-group">
          <button className="btn" type="button" style={{ padding: '8px 28px' }}>Get a Quote</button>
          <span className="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#F2F0EC" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </span>
        </div>
      </div>
    </section>
  );
}
