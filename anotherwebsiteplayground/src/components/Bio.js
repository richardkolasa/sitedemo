import React from 'react';

export default function Bio(props) {
  return (
    <div className={props.className}>
            {props.bioText}
    </div>
  );
}