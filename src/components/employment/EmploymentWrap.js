import React from 'react';
import './EmploymentWrap.scss';

const EmploymentWrap = ({ employList, employmentBg }) => {
  return (
    <div class='empoyment-wrap'>
      {employList.map((item) => (
        <a
          href={item.link}
          target='_blank'
          className='empolyment-item empolyment-item-link'
          style={{ backgroundImage: `url(${employmentBg})` }}
        >
          <h1>{item.text}</h1>
          <p>Lokacija: {item.location}</p>
        </a>
      ))}
    </div>
  );
};

export default EmploymentWrap;
