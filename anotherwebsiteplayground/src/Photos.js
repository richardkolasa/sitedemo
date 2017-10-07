import React, { Component } from 'react';

import ImageFrame from './components/ImageFrame';

class Photos extends Component {
  render() {
    return (
      <ImageFrame
        className="image-frame"
        imageSource={require('./ppetmp(2).jpg')}
        altText="testImage"
      />
    );
  }
}

export default Photos;
