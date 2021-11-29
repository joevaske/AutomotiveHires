import React from 'react';
import logo from '../../images/RT-RK-auto.svg';
import './HeaderMainPage.scss';

const HeaderMainPage = () => {
  return (
    <header class='header'>
      <div class='logo'>
        <a href='https://rt-rk.com'>
          <img src={logo} alt='' />
        </a>
      </div>
    </header>
  );
};

export default HeaderMainPage;
