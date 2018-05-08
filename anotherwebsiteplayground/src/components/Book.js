import React from 'react';

export default function Book(props) {
  return (
    <div className={props.className}>
      <a href={props.url}>
        <img src={props.imageSource} alt={props.altText} />
      </a>
    </div>
  );
}
