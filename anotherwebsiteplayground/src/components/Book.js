import React from 'react';

export default function Book(props) {
  return (
    <div className={props.className}>
      <img src={props.imageSource} />
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
}
