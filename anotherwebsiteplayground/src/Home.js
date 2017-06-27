import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import Bio from './components/Bio';

import SocialButton from './components/SocialButton';
import './App.css';

const social = {
  twitterURL: 'https://www.twitter.com/richardkolasa',
  twitterName: 'Twitter',
  mediumURL: 'https://medium.com/@richkolasa',
  mediumName: 'Medium',
  linkedInURL: 'https://www.linkedin.com/in/richardkolasa/',
  linkedInName: 'LinkedIn'
}

var date = new Date();
var dayOfWeek = date.getDay();

var weekdays = new Array(7);
weekdays[0] = '#endSundayScaries';
weekdays[1] = 'it\'s monday: aspire(and caffeinate)';
weekdays[2] = 'tuesdays are ok';
weekdays[3] = 'everything looks good from wednesday';
weekdays[4] = 'thursday? you mean friday-eve';
weekdays[5] = 'happy friday';
weekdays[6] = 'it\'s saturday, nice!';

const bioText = 'im a photographer-turned-developer with a love for new technologies, writing, and advocating for changes to the modern work environment'

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <h1>{weekdays[dayOfWeek]}</h1>
            <Bio className="bio" bioText={bioText} />
            <div className="social-row">
              <SocialButton 
                address={social.twitterURL}
                name={social.twitterName} />
              <SocialButton 
                address={social.mediumURL}
                name={social.mediumName} />
              <SocialButton 
                address={social.linkedInURL}
                name={social.linkedInName} />
            </div>
        <div className="call-to-action">
          reach out, let's get into it
        </div>
      </div>
    );
  }
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;