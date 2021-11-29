import React from 'react';
import './HeaderBlogPage.scss';

import logoRTRK from '../../images/RT-RK-auto.svg';
import logoMotionWise from '../../images/MotionWise_Signet_Logow.svg';
import logoTTTech from '../../images/TTTechAuto_Logow.svg';

const HeaderBlogPage = () => {
  return (
    <div class='header-page'>
      <div class='logo'>
        <a href='https://rt-rk.com'>
          <img src={logoRTRK} alt='RT-RK Automotive' />
        </a>
      </div>
      <div class='logo-large'>
        <a href='../index.html'>
          <img src={logoMotionWise} alt='MotionWise' />
        </a>
      </div>
      <div class='logo-medium'>
        <a href='../index.html'>
          <img src={logoTTTech} alt='TTTech auto' />
        </a>
      </div>
    </div>
  );
};

export default HeaderBlogPage;
