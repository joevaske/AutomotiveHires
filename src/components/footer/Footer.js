import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-container'>
        <p className='light-text'>
          Copyright &copy; 2021 &nbsp;
          <a href='http://rt-rk.com' target='_blank'>
            RT-RK Institute for Computer Based Systems
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
