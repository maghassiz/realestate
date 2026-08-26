'use client';

import { useState } from 'react';
import Label from './Label';

const FAQS = [
  {
    q: 'What should I prepare before starting my property search?',
    a: "Before starting your search, it's important to define your budget, preferred location, and long-term goals. You should also consider your financing options and timeline. Our agents help you refine these early, so every property you explore is relevant and aligned with your needs.",
  },
  {
    q: 'How do I know if a property is fairly priced?',
    a: 'We assess comparable sales, market trends, and property condition to guide you toward a fair and informed valuation.',
  },
  {
    q: 'What services do your agents provide?',
    a: 'Our agents provide end-to-end guidance, from property search and evaluation to negotiation and closing support.',
  },
  {
    q: 'Do you assist with property investment decisions?',
    a: 'Yes, we help investors identify properties with strong growth potential based on market data and location insights.',
  },
  {
    q: 'How long does the buying process usually take?',
    a: 'The timeline varies, but most transactions complete within 30 to 60 days depending on financing and negotiation.',
  },
  {
    q: 'How will your team guide me through the buying process?',
    a: 'We walk with you at every step—from initial consultation to final paperwork—ensuring clarity and confidence throughout.',
  },
  {
    q: 'How do your agents evaluate if a property is right for me?',
    a: 'We consider your lifestyle, budget, and long-term goals to match you with properties that truly fit your needs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" aria-label="Frequently asked questions">
      <div className="faq__title">
        <Label text="FAQ" />
        <h2 className="faq__heading">The questions with<br />honest answers</h2>
      </div>

      <div className="faq__listing">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <div className="faq-item" data-open={isOpen}>
                <button
                  className="faq-item__question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <svg className="faq-item__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2V14M2 8H14" stroke="#212325" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="faq-item__answer">
                  <p>{item.a}</p>
                </div>
              </div>
              <div className="faq-divider" aria-hidden="true"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
