import React, { Fragment } from 'react';
import Footer from '../footer/Footer';

import HeaderMainPage from '../header/HeaderMainPage';

import PageIntro from '../page-intro/PageIntro';
import Slider from '../slider/Slider';

const Home = () => {
  return (
    <Fragment>
      <HeaderMainPage />
      <Slider />
      <PageIntro />
      <Footer />
    </Fragment>
  );
};

export default Home;
