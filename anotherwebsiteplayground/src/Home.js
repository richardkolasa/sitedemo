import React, { Component } from 'react';

import Header from './components/Header';

var date = new Date();
var dayOfWeek = date.getDay();

var weekdays = new Array(7);
weekdays[0] = '#endSundayScaries';
weekdays[1] = 'It\'s Monday: aspire(and caffeinate)';
weekdays[2] = 'Tuesday- Wednesday\'s Monday';
weekdays[3] = 'it\'s Wednesday, you\'re halfway there!';
weekdays[4] = 'Thursday? You mean Friday-eve.';
weekdays[5] = 'happy Friday!';
weekdays[6] = 'It\'s Saturday, nice!';

class HomeComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     class: ''
  //   };
  // }

  render() {
    return (
      <div className='home-wrapper'>
        <Header className="email" />
        <div className="content">
          <div className="home-grid">
            <h2 className="daily-message">
              {weekdays[dayOfWeek]}
            </h2>
            <p className="bio">
              I'm a technologist, a developer, and an advocate for
              improving workplaces through <a href="/what-matters">shared values</a>.
              <br />
              <br />
              I spend my time writing code, making images,{' '}
              <a href="/reading-list">reading</a>,{' '}
              <a href="https://www.twitter.com/notkoalas">tweeting</a>, and
              diving into the latest mobile or web tech. I also love building,{' '}
              <a href="/archive">curating</a>, and maintaining my family's photo
              and video archive spanning nearly 100 years.
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default HomeComponent;
