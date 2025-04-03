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
              I am a Google Cloud Digital Leader-certified professional, a UK-qualified Engineering Manager, and a full-stack software engineer with over nine years of commercial experience across diverse sectors, including UK Higher Education, EdTech, FinTech, Agri-Tech, Health, E-commerce, and Fitness.<br />

              My expertise lies in leading and developing visually engaging, intuitive web and mobile applications, ensuring they meet the highest standards of quality, scalability, and reliability.<br />

              With strong problem-solving abilities, analytical thinking, attention to detail, and effective planning, I bring excellent communication, interpersonal, and collaboration skills to every team I join. My proven ability to thrive in multi-cultural and dynamic environments has enabled me to contribute significantly to achieving organisational goals.<br />

              I am a professional member of the British Computer Society (BCS) and a registered member of the Nigerian Society of Engineers (NSE), where I first qualified as an Engineer.
                <br />
                <br />
              </span>
              {/* <div className='detail flex'>
                <span className='category'>Email</span>
                <div id='email' onClick={copy}>
                  Connect with Me
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
              </div> */}
              <div className='detail flex'>
                <span className='category'>Github</span>
                <a href={githubUrl}>Visit My Github Profile</a>
              </div>
              {linkedInUrl && (
                <div className='detail flex'>
                  <span className='category'>LinkedIn</span>
                  <a href={linkedInUrl}>Connect on LinkedIn</a>
                </div>
              )}
              {blogUrl && (
                <div className='detail flex'>
                  <span className='category'>Youtube</span>
                  <a href={blogUrl}>Ifeoluwa Afuwape (TechChat with Ife)</a>
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
