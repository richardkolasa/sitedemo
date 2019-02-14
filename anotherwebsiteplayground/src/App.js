import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import WhatMatters from './WhatMatters';

const archivePromise = import("./Archive");
const Archive = React.lazy(() =>
  archivePromise
);

const readingListPromise = import("./ReadingList");
const ReadingList = React.lazy(() =>
  readingListPromise
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ''
    };
  }

  switch = () => {
    var mode = localStorage.getItem('mode');
    if (mode === 'lightMode') {
      localStorage.setItem('mode', 'nightMode');
      this.setState({ class: 'appNight' });
    } else {
      localStorage.setItem('mode', 'lightMode');
      this.setState({ class: 'appLight' })
    }
  }

  componentDidMount = () => {
    var mode = localStorage.getItem('mode');
    if (mode) {
      this.setState({ class: mode });
    } else {
      this.setState({ class: 'default' });
    }
  };

  render() {
    return (
      <div className={this.state.class}>
        <Route exact path="/" component={Home} />
        <React.Suspense fallback={<div></div>}>
          <Route exact path="/archive" component={Archive} />
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Route
            exact
            path="/reading-list"
            component={ReadingList}
          />
        </React.Suspense>
        <Route exact path="/what-matters" component={WhatMatters} />
        <button onClick={this.switch}>test</button>
      </div>
    );
  }
}

export default App;
