'use client';

import { useState } from 'react';
import Label from './Label';
import { ph } from '../lib/placeholder';

const TESTIMONIALS = [
  {
    quote: 'A seamless experience from start to finish. The team truly understands what matters—finding a home that feels right, not just looks good.',
    name: 'Vaidas Vileikis',
    role: 'FOUNDER, NAME ARCHITECTS',
    rating: '5.0 of 5.0',
    seed: 'client-1',
  },
  {
    quote: 'From the first walkthrough to closing day, everything felt effortless. They listened to what we actually needed, not just what was on paper.',
    name: 'Elena Marsh',
    role: 'INTERIOR DESIGNER, MARSH STUDIO',
    rating: '4.9 of 5.0',
    seed: 'client-2',
  },
  {
    quote: "We found a home that fit our lifestyle within weeks. The team's local knowledge and honesty made all the difference.",
    name: 'Tomas Berg',
    role: 'FOUNDER, BERG & CO',
    rating: '5.0 of 5.0',
    seed: 'client-3',
  },
  {
    quote: 'Clear communication, patient guidance, and a genuine focus on long-term value—exactly what we needed as first-time buyers.',
    name: 'Priya Nair',
    role: 'PRODUCT MANAGER, ORBIT LABS',
    rating: '4.8 of 5.0',
    seed: 'client-4',
  },
  {
    quote: "They understood our investment goals immediately and matched us with properties that outperformed our expectations.",
    name: 'Marco Diez',
    role: 'INVESTOR, DIEZ CAPITAL',
    rating: '5.0 of 5.0',
    seed: 'client-5',
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];
  const total = TESTIMONIALS.length;

  return (
    <section className="testimonial" aria-label="Client stories">
      <div className="testimonial__top">
        <Label text="CLIENT STORIES" />
        <span className="testimonial__count">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <div className="testimonial__nav">
          <button
            className="btn-icon--outline is-prev"
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
          >
            <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#0A1012" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </button>
          <button
            className="btn-icon--outline"
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % total)}
          >
            <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#0A1012" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
      <div className="testimonial__body">
        <div className="testimonial__photo">
          <img src={ph(current.seed, 180, 200)} alt={`Portrait of ${current.name}`} />
        </div>
        <div className="testimonial__content">
          <span className="testimonial__quote-icon">
            <svg viewBox="0 0 27 20" fill="none" aria-hidden="true"><path d="M0 20V11.5C0 5.1 4.8 0.6 11 0V4.4C7.6 5 5.5 7.6 5.3 11H11V20H0ZM16 20V11.5C16 5.1 20.8 0.6 27 0V4.4C23.6 5 21.5 7.6 21.3 11H27V20H16Z" fill="#212325" /></svg>
          </span>
          <div className="testimonial__text-block">
            <p className="testimonial__quote">{current.quote}</p>
            <div className="testimonial__bottom">
              <div className="testimonial__author">
                <p className="testimonial__author-name">{current.name}</p>
                <p className="testimonial__author-role">{current.role}</p>
              </div>
              <div className="testimonial__rating">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 1.5L12.4 7L18.5 7.6L13.9 11.6L15.3 17.6L10 14.4L4.7 17.6L6.1 11.6L1.5 7.6L7.6 7L10 1.5Z" fill="#212325" /></svg>
                <span>Google review score: {current.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
