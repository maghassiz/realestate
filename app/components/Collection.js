import Label from './Label';
import { ph } from '../lib/placeholder';

const CARDS = [
  { title: 'Compact Living Home', desc: 'A smartly designed home that maximizes space efficiency while maintaining comfort and everyday functionality.', pills: ['Cabin', 'Nature Living'], dark: false, seed: 'card-1' },
  { title: 'Minimalist House', desc: 'Clean lines and open spaces create a calm, modern home focused on simplicity, clarity, and effortless living.', pills: ['Compact', 'Private Living'], dark: true, seed: 'card-2' },
  { title: 'Modern Cabin', desc: 'A contemporary retreat that blends natural surroundings with modern comfort, offering a warm and relaxing living experience.', pills: ['Minimalist', '2.5 Bath'], dark: false, seed: 'card-3' },
  { title: 'Modern Cabin', desc: 'Designed as a peaceful escape, this home balances privacy, comfort, and modern aesthetics in every detail.', pills: ['Retreat', 'Private Living'], dark: false, seed: 'card-4' },
];

export default function Collection() {
  return (
    <section className="collection" aria-label="Our collection">
      <div className="collection__label">
        <Label text="OUR COLLECTION" />
        <h2 className="collection__heading">{'Designed homes\nfor modern living'}</h2>
      </div>

      <div className="collection__cards">
        {CARDS.map((card, i) => (
          <article className="card" key={`${card.title}-${i}`}>
            <div className="card__photo">
              <img src={ph(card.seed, 424, 500)} alt={`${card.title} exterior`} />
              <div className="card__pills">
                {card.pills.map((pill) => (
                  <span className={`pill${card.dark ? ' pill--dark' : ''}`} key={pill}>{pill}</span>
                ))}
              </div>
            </div>
            <div className="card__content">
              <h3 className="card__title">{card.title}</h3>
              <p className="card__desc">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
