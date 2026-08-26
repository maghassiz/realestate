import Label from './Label';
import { ph } from '../lib/placeholder';

const BedIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="9" width="16" height="7" rx="1.5" stroke="#212325" strokeWidth="1.3" />
    <path d="M3 9V6.5C3 5.67 3.67 5 4.5 5H9.5C10.33 5 11 5.67 11 6.5V9" stroke="#212325" strokeWidth="1.3" />
  </svg>
);
const BathIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="3" y="8" width="14" height="8" rx="1.5" stroke="#212325" strokeWidth="1.3" />
    <path d="M6 8V5.5C6 4.67 6.67 4 7.5 4H8" stroke="#212325" strokeWidth="1.3" />
  </svg>
);
const AreaIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="12" height="12" stroke="#212325" strokeWidth="1.3" />
  </svg>
);

const ITEMS = [
  {
    label: 'Windows',
    title: 'Cedar Lane House',
    desc: 'Designed for everyday living, this home offers a perfect balance of space, light, and privacy.',
    seed: 'showcase-1',
  },
  {
    label: 'Structural',
    title: 'Oakwood Residence',
    desc: 'A modern family home that combines clean design with practical, comfortable living spaces.',
    seed: 'showcase-2',
  },
  {
    label: 'Modern',
    title: 'Maple Grove House',
    desc: 'A bright and inviting home designed with open spaces and seamless indoor-outdoor living.',
    seed: 'showcase-3',
  },
];

export default function Showcase() {
  return (
    <section className="showcase" aria-label="Thoughtfully designed homes">
      <div className="showcase__title">
        <div className="showcase__label-row">
          <div className="showcase__divider" aria-hidden="true"></div>
          <Label text="BEST COLLECTION" />
        </div>
        <div className="showcase__body">
          <h2 className="showcase__heading">{'Thoughtfully designed\nhomes for modern living'}</h2>
          <p className="showcase__desc">Located in carefully selected neighborhoods, each property is designed to balance comfort, functionality, and long-term value. From natural light to spatial flow, every detail is considered to create a home that truly works for everyday living.</p>
        </div>
      </div>

      <div className="showcase__row">
        <div className="showcase__row-main">
          <img src={ph('showcase-main', 1000, 600)} alt="Bright modern living room with large windows" />
        </div>
        <div className="showcase__row-side">
          <img src={ph('showcase-side', 380, 400)} alt="Modern house exterior with landscaped garden" />
        </div>
      </div>

      <div className="showcase__items">
        {ITEMS.map((item) => (
          <article className="showcase-item" key={item.title}>
            <div className="showcase-item__photo">
              <img src={ph(item.seed, 408, 460)} alt={`${item.title} exterior view`} />
              <div className="showcase-item__overlay" aria-hidden="true"></div>
              <span className="showcase-item__label">{item.label}</span>
            </div>
            <div className="showcase-item__content">
              <h3 className="showcase-item__title">{item.title}</h3>
              <p className="showcase-item__desc">{item.desc}</p>
              <div className="showcase-item__facts">
                <div className="fact"><BedIcon /><span>3 Beds</span></div>
                <div className="fact"><BathIcon /><span>2 Baths</span></div>
                <div className="fact"><AreaIcon /><span>1.829 sqft</span></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
