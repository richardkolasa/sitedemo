import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-background">
          <h1>Rich Kolasa</h1>
          <div className="Social-Row">
            <button className="Social-Button">
              <a href="https://www.twitter.com/richardkolasa">Twitter</a>
            </button>
            <button className="Social-Button">
              <a href="https://medium.com/@richkolasa">Medium</a>
            </button>
            <button className="Social-Button">
              GitLab
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
