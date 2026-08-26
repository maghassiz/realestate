'use client';

import { useState } from 'react';

const NAV_ITEMS = ['Housing', 'Standart', 'How it Works', 'Portfolio', 'Resources'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#" className="navbar__logo" aria-label="RealEstate home">
          <svg className="navbar__logo-icon" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2 20L14.75 4L27.5 20" stroke="#212325" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 20V12H21V20" stroke="#212325" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="navbar__logo-text">RealEstate</span>
        </a>

        <ul className="navbar__menu">
          {NAV_ITEMS.map((item) => (
            <li className="navbar__item" key={item}>
              {item}
              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#212325" strokeWidth="1.2" />
              </svg>
            </li>
          ))}
        </ul>

        <ul className={`navbar__menu navbar__menu--mobile-open${open ? ' is-open' : ''}`} id="navbarMenuMobile">
          {NAV_ITEMS.map((item) => (
            <li className="navbar__item" key={item}>{item}</li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="btn" type="button">Get Started</button>
          <span className="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 11 10" fill="none"><path d="M1 5H10M10 5L6 1M10 5L6 9" stroke="#F2F0EC" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </span>
          <button
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="navbarMenuMobile"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
