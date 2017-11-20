import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Home from './Home';
import Archive from './Archive';
import ReadingList from './ReadingList';

import './App.css';
import './Archive.css';

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
          render={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
          )}
        />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/reading-list" component={ReadingList} />
      </div>
    );
  }
}

export default App;
