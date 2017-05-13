import React, { Component } from 'react';
import './App.css';
import SocialButton from './components/SocialButton'

const social = {
  twitterURL: 'https://www.twitter.com/richardkolasa',
  twitterName: 'Twitter',
  mediumURL: 'https://medium.com/@richkolasa',
  mediumName: 'Medium',
  linkedInURL: 'https://www.linkedin.com/in/richardkolasa/',
  linkedInName: 'LinkedIn'
}

const socialButtonClass='social-button'

var date = new Date();
var dayOfWeek = date.getDay();

var weekdays = new Array(7);
weekdays[0] = '#endSundayScaries';
weekdays[1] = 'it\'s monday: aspire(and caffeinate)';
weekdays[2] = 'tuesday';
weekdays[3] = 'wednesday';
weekdays[4] = 'thursday';
weekdays[5] = 'friday';
weekdays[6] = 'it\'s saturday, nice!';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
        <h1>{weekdays[dayOfWeek]}</h1>
          <div className="bio">
            i'm a photographer-turned-developer with a love for new technologies, 
            writing, and advocating for changes to the modern work environment
          </div>
          <div className="social-row">
            <SocialButton 
              address={social.twitterURL}
              className={socialButtonClass}
              name={social.twitterName} />
            <SocialButton 
              address={social.mediumURL}
              className={socialButtonClass} 
              name={social.mediumName} />
            <SocialButton 
              address={social.linkedInURL}
              className={socialButtonClass}
              name={social.linkedInName} />
          </div>
          <div className="call-to-action">
            reach out, let's get into it
          </div>
        </div>
        <footer>
          Check out this site's code on <a href="https://github.com/richardkolasa/sitedemo">GitHub</a>.
        </footer>
      </div>
    );
  }
}

export default App;
