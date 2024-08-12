import './index.scss';

import React from 'react';
import SubTitle from '../common/SubTitle';
import myData from '../../db.json';
import { useTranslation } from 'react-i18next';

const SkillSets = () => {
  const { skillSets } = myData;
  const { t } = useTranslation();

  return (
    <>
      {skillSets && (
        <>
          <SubTitle>Skills & Interests</SubTitle>
          <div className='skill-sets-container'>
            {skillSets.map((set, index) => (
              <div className='skill-set' key={index}>
                <div className='category'>{set.category}</div>
                <div className='items'>
                  {set.skills
                    .sort((a, b) => b.level - a.level)
                    .map(({ skill, level }, index) => (
                      <div className='item' key={index}>
                        <span className='skill'>{skill}</span>
                        {level && <span className={`level ${level > 3 && 'expert'}`}>{level}</span>}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SkillSets;
