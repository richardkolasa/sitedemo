import React, { Component } from 'react';
import './App.css';

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
              <a href="https://www.twitter.com/richardkolasa">
                <button className="social-button">Twitter</button>
              </a>
              <a href="https://medium.com/@richkolasa">
                <button className="social-button">Medium</button>
              </a>
              <a href="https://www.linkedin.com/in/richardkolasa/">
                <button className="social-button">LinkedIn</button>
              </a>
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
