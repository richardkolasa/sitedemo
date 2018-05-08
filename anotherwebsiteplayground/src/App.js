import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Route } from 'react-router-dom';

import './Archive.css';

class App extends Component {
  state = { lazyHome: null };

  async componentDidMount() {
    const { default: Home } = await import('./Home');
    const { default: Archive } = await import('./Archive');
    const { default: ReadingList } = await import('./ReadingList');
    this.setState({
      lazyHome: Home,
      lazyArchive: Archive,
      lazyReadingList: ReadingList
    });
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <link rel="stylesheet" href="animate.min.css" />
        </Helmet>
        <Route exact path="/" component={this.state.lazyHome} />
        <Route exact path="/archive" component={this.state.lazyArchive} />
        <Route
          exact
          path="/reading-list"
          component={this.state.lazyReadingList}
        />
      </div>
    );
  }
}

export default App;
