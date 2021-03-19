import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <i className={`fa-2x fab ${icon}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
