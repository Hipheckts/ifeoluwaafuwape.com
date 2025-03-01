import './index.scss';

import React, { useEffect, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { LANGUAGE } from '../../constants/language';
import SubTitle from '../common/SubTitle';
import mmd from '../../assets/mmd';
import myData from '../../db.json';
import useLanguage from '../../hooks/useLanguage';

const AboutMe = () => {
  const {
    aboutMe: {
      profileImg,
      name,
      email,
      githubUrl,
      blogUrl,
      linkedInUrl,
      resumeUrl,
    },
  } = myData;
  const { currentLanguage } = useLanguage();

  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(email);
    setIsEmailCopied(true);
  };

  const nodeRef = useRef(null);
  useEffect(() => {
    if (isEmailCopied) {
      const timer = setTimeout(() => {
        setIsEmailCopied(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isEmailCopied]);

  const [aboutMySelfText, setAboutMySelfText] = useState('');

  const aboutMyselfRef = useRef(null);

  useEffect(() => {
    if (currentLanguage === LANGUAGE.KO) {
      import(`../../assets/static/markdown/aboutMySelf.korean.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setAboutMySelfText(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);

          return '';
        });
      return;
    }

    if (currentLanguage === LANGUAGE.EN) {
      import(`../../assets/static/markdown/aboutMySelf.english.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setAboutMySelfText(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);

          return '';
        });
      return;
    }
  }, [currentLanguage]);

  if (aboutMyselfRef.current) {
    aboutMyselfRef.current.innerHTML = mmd(aboutMySelfText);
  }

  return (
    <>
      <div className='about-me-container'>
        <div className='personal-infos'>
          <div className='profile-image'>
            <img src={profileImg} alt={`${name}`} />
          </div>
          <div className='detail-wrapper'>
            <div className='details'>
              <span className='details'>
                I am a full stack software engineer with over eight (8) years commercial software development both web and mobile with my experience spanning across EdTech, FinTech, Agri-Tech, Health and E-commerce.
                My focus and strengths are in crafting visually engaging and intuitive web and mobile solutions whilst adhering to stringent benchmarks of quality, scalability, and dependability.
                <br />
                <br />
              </span>
              <div className='detail flex'>
                <span className='category'>Email</span>
                <div id='email' onClick={copy}>
                  {email}
                  <CSSTransition
                    nodeRef={nodeRef}
                    in={isEmailCopied}
                    timeout={300}
                    classNames='alert'
                    unmountOnExit
                    appear
                  >
                    <span ref={nodeRef} className='alert'>
                      copied!
                    </span>
                  </CSSTransition>
                </div>
              </div>
              <div className='detail flex'>
                <span className='category'>Github</span>
                <a href={githubUrl}>{githubUrl}</a>
              </div>
              {blogUrl && (
                <div className='detail flex'>
                  <span className='category'>Blog</span>
                  <a href={blogUrl}>{blogUrl}</a>
                </div>
              )}
              {linkedInUrl && (
                <div className='detail flex'>
                  <span className='category'>LinkedIn</span>
                  <a href={linkedInUrl}>{linkedInUrl}</a>
                </div>
              )}
              {resumeUrl && (
                <div className='detail flex'>
                  <span className='category'>Resume</span>
                  <a href={resumeUrl} target='blank_'>
                    View Resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
