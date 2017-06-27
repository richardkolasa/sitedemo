import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Home from './Home';
import './App.css';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={({ match, ...rest}) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
          )}/>
        <footer>
          Check out this site's code on <a href="https://github.com/richardkolasa/sitedemo">GitHub</a>.
        </footer>
      </div>
    );
  }
}

export default App;
