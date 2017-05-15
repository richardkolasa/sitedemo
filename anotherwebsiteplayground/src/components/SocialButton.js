import React from 'react';

export default function SocialButton(props) {
  const socialButtonClass='social-button'

  return (
    <a href={props.address}>
      <button className={socialButtonClass}>{props.name}</button>
    </a>
  );
}