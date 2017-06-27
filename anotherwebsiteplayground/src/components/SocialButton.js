import React from 'react';
import '../App.css';

export default function SocialButton(props) {
  const socialButtonClass='social-button'

  return (
    <a href={props.address}>
      <button className={socialButtonClass}>{props.name}</button>
    </a>
  );
}