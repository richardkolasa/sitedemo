import React, { Component } from 'react';
import 'animate.css';

import Header from './components/Header';

var date = new Date();
var dayOfWeek = date.getDay();

var weekdays = new Array(7);
weekdays[0] = '#endSundayScaries';
weekdays[1] = 'it\'s monday: aspire(and caffeinate)';
weekdays[2] = 'tuesday- wednesday\'s monday';
weekdays[3] = 'it\'s wednesday, you\'re halfway there!';
weekdays[4] = 'thursday? you mean friday-eve';
weekdays[5] = 'happy friday!';
weekdays[6] = 'it\'s saturday, nice!';

class HomeComponent extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header className="email" />
        <div className="content">
          <div className="home-grid animated fadeIn">
            <h2 className="daily-message animated fadeIn">
              {weekdays[dayOfWeek]}
            </h2>
            <p className="bio">
              I spend my time writing code, making images,{' '}
              <a href="/reading-list">reading</a>,{' '}
              <a href="https://www.twitter.com/richardkolasa">tweeting</a>, and
              diving into the latest mobile or web tech. I also love building,{' '}
              <a href="/archive">curating</a>, and maintaining my family's photo
              and video archive spanning nearly 100 years.
            </p>
          </div>
          <div className="profile-image animated fadeIn">
            <img src={require('./images/selfie.jpg')} alt="headshot" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
