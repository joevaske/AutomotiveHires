import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slajd1 from '../../images/slider/4_slajd.jpg';
import slajd2 from '../../images/slider/milovan_vidovic_slajd.jpg';
import slajd3 from '../../images/slider/welcome_juniors.jpg';
import slajd4 from '../../images/slider/marko_halak_slider.jpg';
import slajd5 from '../../images/slider/slajder_tesla.jpg';

import './Slider.scss';

const slides = [
  {
    id: 1,
    img: slajd1,
    link: '#intro',
    headingOne: 'How to balance work and study?',
    headingTwo:
      'Apply where your academic development is supported an encouraged.',
  },
  {
    id: 2,
    img: slajd2,
    link: '#intro',
    headingOne: 'From RT-RK to ZF and back',
    headingTwo: 'Milovan Vidovic',
  },
  {
    id: 3,
    img: slajd3,
    link: '#intro',
    headingOne:
      'We are all entitled to make mistakes, in particular when lacking experience.',
    headingTwo: 'Welcome, Juniors!',
  },
  {
    id: 4,
    img: slajd4,
    link: '#intro',
    headingOne: 'The complexity of ADAS-in-development testing',
    headingTwo: 'Marko Halak',
  },
  {
    id: 5,
    img: slajd5,
    link: '#intro',
    headingOne: 'Why do we love Tesla?',
    headingTwo: 'Innovation. Belief in own product. Challenge.',
  },
];

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      interval={4000}
    >
      {slides.map((slide) => (
        <div className='single-slide'>
          <img src={slide.img} alt={slide.headingOne} />
          <div className='single-slide__text'>
            <p>
              <a href={slide.link}>{slide.headingOne}</a>
            </p>
            <p>
              <a href={slide.link}>{slide.headingTwo}</a>
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
