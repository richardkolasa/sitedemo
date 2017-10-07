import React from 'react';

export default function ImageFrame(props) {
  return (
    // Image Container
    <div className={props.className}>
      <img src={props.imageSource} alt={props.altText} />
    </div>
  );
}
