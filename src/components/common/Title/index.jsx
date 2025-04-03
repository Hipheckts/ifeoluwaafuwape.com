import './index.scss';

import React from 'react';
import myData from '../../../db.json';

const Title = () => {
  const {
    aboutMe: { name },
  } = myData;

  return (
    <div className='title'>
      <h1 className='title__h1'> {name}<br/><span style={{fontSize: '2rem', color: 'rgb(234, 65, 56)'}}>Software Engineer and Engineering Manager</span></h1>
    </div>
  );
};

export default Title;
