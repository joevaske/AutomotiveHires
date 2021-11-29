import React from 'react';
import EmploymentWrap from './EmploymentWrap';
import employmentBackgrounImage from '../../images/employment-bg-1.jpg';

const employmentList = [
  {
    id: 1,
    link: 'https://rt-rk.talentlyft.com/jobs/junior-embedded-engineer-in-area-of-automotive-software-development-mmz',
    text: 'Junior Embedded Engineer in area of Automotive Software Development',
    location: 'Novi Sad',
  },
  {
    id: 2,
    link: 'https://rt-rk.talentlyft.com/jobs/embedded-engineer-in-area-of-automotive-software-development-mmw',
    text: 'Embedded Engineer in area of Automotive Software Development',
    location: 'Novi Sad',
  },
  {
    id: 3,
    link: 'https://rt-rk.talentlyft.com/jobs/scrum-master-in-area-of-automotive-embedded-software-development-ml8',
    text: 'Scrum Master in area of Automotive Embedded Software Development',
    location: 'Novi Sad',
  },
  {
    id: 4,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-bcm-engineer-customer-build-framework-tools-development-mmb',
    text: 'Automotive BCM Engineer - Customer Build Framework /Tools development',
    location: 'Novi Sad',
  },
  {
    id: 5,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-embedded-software-architect-lX8',
    text: 'Automotive Embedded Software Architect',
    location: 'Novi Sad, Beograd',
  },
  {
    id: 6,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-senior-software-developer-mmt',
    text: 'Senior Automotive Software Developer',
    location: 'Novi Sad, Beograd, Osijek, Banja Luka',
  },
  {
    id: 7,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-professional-software-developer-mmr',
    text: 'Professional Automotive Software Developer',
    location: 'Novi Sad, Beograd, Osijek, Banja Luka',
  },
  {
    id: 8,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-junior-software-developer-mmq',
    text: 'Junior Automotive Software Developer',
    location: 'Novi Sad, Beograd, Osijek, Banja Luka',
  },
  {
    id: 9,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-project-manager-ml2',
    text: 'Automotive Project Manager',
    location: 'Novi Sad',
  },
  {
    id: 10,
    link: 'https://rt-rk.talentlyft.com/jobs/automotive-software-test-developer-ml1',
    text: 'Automotive Software Test Developer',
    location: 'Novi Sad',
  },
];

const EmploymentPositions = () => {
  return (
    <section className='employment'>
      <EmploymentWrap
        employList={employmentList}
        employmentBg={employmentBackgrounImage}
      />
    </section>
  );
};

export default EmploymentPositions;
