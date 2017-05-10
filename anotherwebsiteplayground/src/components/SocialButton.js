import React from 'react';

export default function SocialButton(props) {
  return (
    <a href={props.address}>
      <button className={props.className}>{props.name}</button>
    </a>
  );
}