import React, { Component } from 'react';

import Header from './components/Header';

import './Archive.css';

var images = [];

function composeImage(index) {
  return (
    <img
      src={images[index].src}
      className={images[index].className}
      alt={images[index].altText}
    />
  )
}

images[0] = new Image();
images[0].src = require('./images/archive/archive1.jpg');
images[0].className = 'imageClass circus';
images[0].altText = 'Blurry, deep orange image of a circus';

images[1] = new Image();
images[1].src = require('./images/archive/archive4.jpg');
images[1].className = 'imageClass firework-1';
images[1].altText = 'Two small firework bursts against the night sky';

images[2] = new Image();
images[2].src = require('./images/archive/archive5.jpg');
images[2].className = 'imageClass statue-leash';
images[2].altText =
  'Small boy holding onto the leash of a statue depicting a well-dressed woman walking her dog';

images[3] = new Image();
images[3].src = require('./images/archive/archive7.jpg');
images[3].className = 'imageClass firework-2';
images[3].altText =
  'One small firework burst, centered in the frame against the night sky';

images[4] = new Image();
images[4].src = require('./images/archive/archive8.jpg');
images[4].className = 'imageClass newborn';
images[4].altText =
  'A young sleeping baby wrapped in a blanket on the deck of a pool, with a pair of sunglasses beside his head';

images[5] = new Image();
images[5].src = require('./images/archive/archive10.jpg');
images[5].className = 'imageClass opa-card';
images[5].altText =
  'A man holding an index card in front of his face, obscuring everything but his forehead and chin';

images[6] = new Image();
images[6].src = require('./images/archive/archive11.jpg');
images[6].className = 'imageClass crane-flight';
images[6].altText = 'A crane flying low over a lake';

images[7] = new Image();
images[7].src = require('./images/archive/archive13.jpg');
images[7].className = 'imageClass opa-garden-orange-flowers';
images[7].altText =
  'A man, small and to the left, standing in a garden looking over his shed and the large, bright orange flowers in the front of the frame';

images[8] = new Image();
images[8].src = require('./images/archive/archive15.jpg');
images[8].className = 'imageClass mom-glass-taurus';
images[8].altText =
  'A woman stares through the glass of a car window, with relfections cutting across her face';

images[9] = new Image();
images[9].src = require('./images/archive/archive22.jpg');
images[9].className = 'imageClass squirell-jump';
images[9].altText =
  'A squirell jumps upward from a bird feeder suspended from a deck frame';

images[10] = new Image();
images[10].src = require('./images/archive/archive23.jpg');
images[10].className = 'imageClass squirell';
images[10].altText =
  'A squirell clings to a bird feeder suspended from a deck frame';

images[11] = new Image();
images[11].src = require('./images/archive/archive25.jpg');
images[11].className = 'imageClass firework-3';
images[11].altText = 'A single firework burst against a twilit sky';

images[12] = new Image();
images[12].src = require('./images/archive/archive27.jpg');
images[12].className = 'imageClass dive';
images[12].altText = 'A person under water, diving in the deep end of a pool';

images[13] = new Image();
images[13].src = require('./images/archive/archive31.jpg');
images[13].className = 'imageClass field-distant-balloons';
images[13].altText =
  'Tall field grass, with distant hot-air balloons dotting the horizon';

images[14] = new Image();
images[14].src = require('./images/archive/archive32.jpg');
images[14].className = 'imageClass firework-4';
images[14].altText = 'Several fireworks burst together, in blue and red';

images[15] = new Image();
images[15].src = require('./images/archive/archive34.jpg');
images[15].className = 'imageClass grandkids-couch';
images[15].altText =
  'A young girl and boy sit with their grandmother. Foreground is taken up by the leg of the photographer, bright white from the camera flash';

class ArchiveComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <Grid images={images} />
      </div>
    );
  }
}

class Grid extends Component {
  render() {
    return (
      <div>
        <Header className="email" />
        <div className="archive-grid animated fadeIn">
          {composeImage(0)}
          {composeImage(1)}
          {composeImage(2)}
          {composeImage(3)}
          {composeImage(4)}
          {composeImage(5)}
          {composeImage(6)}
          {composeImage(7)}
          {composeImage(8)}
          {composeImage(9)}
          {composeImage(10)}
          {composeImage(11)}
          {composeImage(12)}
          {composeImage(13)}
          {composeImage(14)}
          {composeImage(15)}
        </div>
      </div>
    );
  }
}

export default ArchiveComponent;
