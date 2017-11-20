import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import Bio from './components/Bio';

import SocialButton from './components/SocialButton';
import Header from './components/Header';

import './App.css';

const social = {
  twitterURL: 'https://www.twitter.com/richardkolasa',
  twitterName: 'Twitter',
  mediumURL: 'https://medium.com/@richkolasa',
  mediumName: 'Medium',
  linkedInURL: 'https://www.linkedin.com/in/richardkolasa/',
  linkedInName: 'LinkedIn'
};

var date = new Date();
var dayOfWeek = date.getDay();

var weekdays = new Array(7);
weekdays[0] = '#endSundayScaries';
weekdays[1] = 'it\'s monday: aspire(and caffeinate)';
weekdays[2] = 'tuesday- wednesday\'s monday';
weekdays[3] = 'everything looks good from wednesday';
weekdays[4] = 'thursday? you mean friday-eve';
weekdays[5] = 'happy friday!';
weekdays[6] = 'it\'s saturday, nice!';

const p1 =
  'I have a degree in photography, and a growing career in iOS development. I\'m passionately nerdy about both of them.';
// 'im a photographer-turned-developer with a love for new technologies, writing, and advocating for the transition to modern work environments.';

class HomeComponent extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="content">
          <div className="home-grid">
            <div className="daily-message">
              <h1>{weekdays[dayOfWeek]}</h1>
            </div>
            <div className="bio">
              <p>
                I spend my time making images,{' '}
                <a href="/reading-list">reading</a>,{' '}
                <a href="https://www.twitter.com/richardkolasa">tweeting</a>,
                and diving into the latest mobile or web tech. I also love
                building, <a href="/archive">curating</a>, and maintaining my
                family's photo and video archive spanning nearly 100 years.
              </p>
            </div>
          </div>
          <div className="profile-image">
            <img src={require('./images/richkolasa.jpg')} alt="headshot" />
          </div>
        </div>
      </div>
    );
  }
}

var Home = AnimatedWrapper(HomeComponent);
Home.className = 'main-container';
export default Home;
