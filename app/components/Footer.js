import { ph } from '../lib/placeholder';

export default function Footer() {
  return (
    <footer className="site-footer">
      <img className="site-footer__bg" src={ph('footer-bg', 1600, 720)} alt="Modern house exterior at twilight" />
      <div className="site-footer__gradient" aria-hidden="true"></div>

      <div className="footer-card">
        <div className="footer-card__top">
          <div className="footer-card__menu">
            <p className="footer-card__label">MENU</p>
            <nav className="footer-card__links" aria-label="Footer navigation">
              <a href="#">About</a>
              <a href="#" className="is-active">
                Collection
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="#D4CEC6" strokeWidth="1.3" /></svg>
              </a>
              <a href="#">Our Agent</a>
              <a href="#">Newest</a>
              <a href="#">Contact</a>
            </nav>
          </div>
          <div className="footer-card__menu">
            <p className="footer-card__label">SOCIAL MEDIA</p>
            <nav className="footer-card__links" aria-label="Social media links">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Linkedin</a>
              <a href="#">X (Twitter)</a>
            </nav>
          </div>
          <div className="footer-card__art">
            <svg width="200" height="130" viewBox="0 0 200 130" fill="none" aria-hidden="true" style={{ transform: 'scaleY(-1)' }}>
              <path d="M20 120L100 30L180 120" stroke="#D4CEC6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
              <path d="M55 120V75H145V120" stroke="#D4CEC6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          </div>
        </div>

        <div className="footer-card__contacts">
          <div className="footer-card__contact-group">
            <span>+1 292 002 929 2019</span>
            <span>info@real.estate</span>
          </div>
          <div className="footer-card__contact-group">
            <span>+1 292 002 929 2019</span>
            <span>Help Center</span>
          </div>
        </div>

        <div className="footer-card__cta">
          <button className="btn" type="button" style={{ padding: '8px 48px', color: '#d4cec6' }}>Get a Quote</button>
          <span className="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#D4CEC6" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </span>
        </div>
      </div>

      <div className="site-footer__bottom-links">
        <span>Privacy policy</span>
        <i aria-hidden="true"></i>
        <span>Terms &amp; condition</span>
        <i aria-hidden="true"></i>
        <span>Crafted by Rel Estate</span>
      </div>
    </footer>
  );
}
