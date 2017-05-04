import React, { Component } from 'react';
import './App.css';

function SocialLink(props) {
  return (
    <a href={props.address}>
      <button className={props.className}>{props.name}</button>
    </a>
  );
}

const social = {
  twitterURL: 'https://www.twitter.com/richardkolasa',
  twitterName: 'Twitter',
  mediumURL: 'https://medium.com/@richkolasa',
  mediumName: 'Medium',
  linkedInURL: 'https://www.linkedin.com/in/richardkolasa/',
  linkedInName: 'LinkedIn'
}

const socialButtonClass="social-button"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h1>Rich Kolasa</h1>
          <div className="bio">
            i'm a photographer-turned-developer with a love for new technologies, 
            writing, and advocating for changes to the modern work environment
          </div>
          <div className="social-row">
            <SocialLink 
              address={social.twitterURL}
              className={socialButtonClass}
              name={social.twitterName}
            />
            <SocialLink 
              address={social.mediumURL}
              className={socialButtonClass} 
              name={social.mediumName}
            />
            <SocialLink 
              address={social.linkedInURL}
              className={socialButtonClass}
              name={social.linkedInName}
            />
          </div>
          <div className="call-to-action">
            reach out, let's get into it
          </div>
        </div>
        <footer>
          I made this thing with <a href="https://github.com/richardkolasa/sitedemo">&nbsp;React</a>.
        </footer>
      </div>
    );
  }
}

export default App;
