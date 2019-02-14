import React from 'react';

import Header from './components/Header';
import './WhatMatters.css';

class WhatMatters extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header className="email" />
        <div className="mattersContent">
          <p>I believe that every human being should be able to freely pursue
            the improvement of their mental well-being and health. Our fundamental worth is <strong>significant
            and equal</strong>.</p>
          <p>Our values should be built on this foundation.</p>
        </div>
      </div>
    );
  }
}

export default WhatMatters;
