import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-content animated fadeIn">
        <a href="/">
          <h1>Richard Kolasa</h1>
        </a>
        <a href="mailto:hello@richardkolasa.com">
          <p className={props.className}>hello@richardkolasa.com</p>
        </a>
      </div>
    </div>
  );
}
