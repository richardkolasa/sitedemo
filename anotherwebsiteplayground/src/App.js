import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main-container">
          <h1>Rich Kolasa</h1>
          <div className="Social-Row">
              <a href="https://www.twitter.com/richardkolasa">
                <button className="Social-Button">Twitter</button>
              </a>
              <a href="https://medium.com/@richkolasa">
                <button className="Social-Button">Medium</button>
              </a>
              <a href="https://www.linkedin.com/in/richardkolasa/">
                <button className="Social-Button">LinkedIn</button>
              </a>
          </div>
          <h2>I made this thing with React.</h2>
        </div>
      </div>
    );
  }
}

export default App;
