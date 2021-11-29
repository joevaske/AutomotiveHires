import React from 'react';
import './Button.scss';

const Button = ({ classN, link, text }) => {
  return (
    <div className={`button-link ${classN}`}>
      <a href={link} className='btn btn-yellow btn-large '>
        {text}
      </a>
    </div>
  );
};

export default Button;
