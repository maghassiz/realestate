'use client';

import { useState } from 'react';
import Label from './Label';
import { ph } from '../lib/placeholder';

const PROJECTS = [
  { title: 'Maple Grove House', tags: ['Modern Living', 'open space', '1,500–2,500 Sqft'], seed: 'featured-1' },
  { title: 'Oakwood Residence', tags: ['Contemporary', '2-3 beds', 'Spacious Layout'], seed: 'featured-2' },
  { title: 'Oakwood Residence', tags: ['Nature View', '2 Beds', 'Private living'], seed: 'featured-3' },
  { title: 'Cedar Ridge House', tags: ['Modern Design', 'Open Space', 'Compact Living'], seed: 'featured-4' },
];

const Arrow = () => (
  <svg className="featured__arrow" viewBox="0 0 15 14" fill="none" aria-hidden="true">
    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#D4CEC6" strokeWidth="1.3" />
  </svg>
);

export default function Featured() {
  const [active, setActive] = useState(2);

  return (
    <section className="featured" aria-label="Featured projects">
      <div className="featured__top">
        <div className="featured__divider" aria-hidden="true"></div>
        <div className="featured__title">
          <Label text="FEATURED PROJECT" light />
          <div className="featured__label-block">
            <h2 className="featured__heading">Each project tells its own story<br />of collaboration and precision.</h2>
            <div className="btn-group">
              <button className="btn btn--light" type="button" style={{ padding: '8px 20px' }}>View Project</button>
              <span className="btn-icon btn-icon--light" aria-hidden="true">
                <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#212325" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="featured__listing">
        <div className="featured__floating-img">
          <img src={ph(PROJECTS[active].seed, 300, 370)} alt={`Aerial view of ${PROJECTS[active].title}`} />
        </div>

        {PROJECTS.map((project, i) => (
          <div key={`${project.title}-${i}`}>
            <button
              type="button"
              className={`featured__item${i === active ? ' featured__item--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <p className="featured__item-title">{project.title}</p>
              <div className="featured__tags">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              <Arrow />
            </button>
            {i < PROJECTS.length - 1 && <div className="featured__item-divider" aria-hidden="true"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
