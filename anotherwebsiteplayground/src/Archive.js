import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

import Header from './components/Header';

import './Archive.css';

var images = new Array();

images[0] = new Image();
images[0].src = require('./images/archive/1.jpg');
images[0].className = 'imageClass a';

images[1] = new Image();
images[1].src = require('./images/archive/2.jpg');
images[1].className = 'imageClass b';

images[2] = new Image();
images[2].src = require('./images/archive/3.jpg');
images[2].className = 'imageClass c';

images[3] = new Image();
images[3].src = require('./images/archive/4.jpg');
images[3].className = 'imageClass d';

images[4] = new Image();
images[4].src = require('./images/archive/5.jpg');
images[4].className = 'imageClass e';

images[5] = new Image();
images[5].src = require('./images/archive/6.jpg');
images[5].className = 'imageClass f';

images[6] = new Image();
images[6].src = require('./images/archive/7.jpg');
images[6].className = 'imageClass g';

// images[7] = new Image();
// images[7].src = require('./images/archive/ppetmp(8).jpg');
// images[7].className = 'imageClass h';

// images[8] = new Image();
// images[8].src = require('./images/archive/ppetmp(9).jpg');
// images[8].className = 'imageClass i';

// images[9] = new Image();
// images[9].src = require('./images/archive/ppetmp(9).jpg');
// images[9].className = 'imageClass j';

const imageClass = 'image-class';

class ArchiveComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <Grid images={images} />
      </div>
    );
  }
}

var Grid = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="archive-grid">
          <LazyLoad height={200}>
            <img src={images[0].src} className={images[0].className} />
          </LazyLoad>
          <LazyLoad height={200}>
            <img src={images[1].src} className={images[1].className} />
          </LazyLoad>
          <LazyLoad height={200}>
            <img src={images[2].src} className={images[2].className} />
          </LazyLoad>
          <LazyLoad height={200}>
            <img src={images[3].src} className={images[3].className} />
          </LazyLoad>
          <LazyLoad height={200}>
            <img src={images[4].src} className={images[4].className} />
          </LazyLoad>
          <LazyLoad height={200}>
            <img src={images[5].src} className={images[5].className} />
          </LazyLoad>
          <LazyLoad height={200}>
            <img src={images[6].src} className={images[6].className} />
          </LazyLoad>
        </div>
      </div>
    );
  }
});

// {this.props.images.map(image => (
//   <LazyLoad>
//     <img src={image.src} className={image.className} />
//   </LazyLoad>
// ))}
// var Archive = AnimatedWrapper(ArchiveComponent);
// Archive.className = 'wrapper';
export default ArchiveComponent;
