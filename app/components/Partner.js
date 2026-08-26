import Label from './Label';
import { ph } from '../lib/placeholder';

const LOGO_SEEDS = ['brand-1', 'brand-2', 'brand-3', 'brand-4', 'brand-5', 'brand-6', 'brand-7'];

export default function Partner() {
  return (
    <section className="partner" aria-label="Our partners">
      <div className="partner__title">
        <Label text="OUR PARTNER" light />
        <h2 className="partner__heading">{'Trusted and featured\nby industry leaders.'}</h2>
      </div>
      <div className="partner__logos">
        {LOGO_SEEDS.map((seed, i) => (
          <span key={seed} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              className="partner__logo"
              style={{ maskImage: 'none', WebkitMaskImage: 'none', background: 'transparent' }}
              src={ph(seed, 130, 60)}
              alt={`Partner brand logo ${i + 1}`}
            />
            {i < LOGO_SEEDS.length - 1 && <div className="partner__divider" aria-hidden="true"></div>}
          </span>
        ))}
      </div>
    </section>
  );
}
